import './index.css';
import store, {StateType} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let rerenderEntireThree = (state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} changeNewPostText={store.changeNewPostText.bind(store)} addMessage={store.addMessage.bind(store)}
                 changeNewMessageText={store.changeNewMessageText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireThree(store.getState())

store.subscribe(()=>rerenderEntireThree(store.getState()))




