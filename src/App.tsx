import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Profile/>
            </div>
            <Routes>
                <Route path = "hello" element={<HelloMessage message={'Hello'}/>}></Route>
                <Route path = "bye" element={<ByeMessage message={"Bye"}/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

type MessageType = {
    message: string
}

function HelloMessage(props: MessageType) {
    return <h1>{props.message}</h1>
}

const ByeMessage: React.FC<MessageType> = (props) => {
    return <h1>{props.message}</h1>
}
