import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsTypes, StateType} from "./Redux/state";
import Navbar from "./components/Navbar/Navbar";

type AppStateType = {
    state: StateType;
    addPost: () => void
    changeNewPostText: (postTitle: string) => void
    addMessage: () => void
    changeNewMessageText: (message: string) => void
    dispatch:(action: ActionsTypes) =>void
};

const App = (props: AppStateType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={props.state.friends} />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route
                            path="profile"
                            element={<Profile profilePage={props.state.profilePage} addPost={props.addPost}
                                              newPostText={props.state.newPostText}
                                              changeNewPostText={props.changeNewPostText}
                                              dispatch={props.dispatch}
                            />}
                        ></Route>
                        <Route
                            path="/dialogs/*"
                            element={<Dialogs state={props.state.messagePage}
                                              newMessageText={props.state.newTextMessage}
                                              addNewMessage={props.addMessage}
                                              changeTextMessage={props.changeNewMessageText}
                            dispatch={props.dispatch}/>}
                        ></Route>
                        <Route path="news" element={<News/>}></Route>
                        <Route path="music" element={<Music/>}></Route>
                        <Route path="settings" element={<Settings/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
