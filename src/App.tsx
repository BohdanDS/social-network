import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogItemPropsType, MessagePropsType, PostPropsType} from "./index";

type AppPropsType = {
    dialogsData : Array<DialogItemPropsType>,
    messagesData : Array<MessagePropsType>,
    postsData: Array<PostPropsType>
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="profile" element={<Profile myPosts={props.postsData}/>}></Route>
                        <Route path="/dialogs/*" element={<Dialogs usersArray={props.dialogsData} messageArray={props.messagesData}/>}></Route>
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
