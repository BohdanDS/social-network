import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id:1, name:"Dimych"},
    {id:2, name:"Bohdan"},
    {id:3, name:"Varvar"},
    {id:4, name:"MentosX"},
    {id:5, name:"F"},
    {id:6, name: "TEST"}
]
let messagesData = [
    {id:1, messageText:"Hi"},
    {id:2, messageText:"How are you?"},
    {id:3, messageText:"Lets code"},
    {id:4, messageText:"Yo"},
    {id:5, messageText:"Lets go!!!"}
]
let postsData = [
    {id: 1, postTitle: "Post 1 Props", likesCount: 12},
    {id: 2, postTitle: "My post 2", likesCount: 10},
    {id: 2, postTitle: "My post 3", likesCount: 9991}
]

export type DialogItemPropsType = {
    id : number
    name: string
}
export type MessagePropsType = {
    id:number
    messageText:string
}
export type PostPropsType = {
    id: number
    postTitle: string
    likesCount: number
}


ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
