import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";


class App extends React.Component<AppPropsType, AppStateType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Sidebar/>
                    <div className="container">
                        <main className='main'>
                            <Routes>
                                <Route path='/profile' element={<ProfileContainer/>}>
                                    <Route path=':userId' element={<ProfileContainer/>}/>
                                </Route>
                                <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                                <Route path='/users' element={<UsersContainer/>}/>
                                <Route path='/news' element={<News/>}/>
                                <Route path='/music' element={<Music/>}/>
                                <Route path='/settings' element={<Settings/>}/>
                                <Route path='/login' element={<Login/>}/>
                            </Routes>
                        </main>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type mapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        initialized: state.initApp.initialized
    }
}
type AppPropsType = mapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {initializeApp})(App);
