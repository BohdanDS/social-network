import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

import {PostsPropsType} from "./MyPostsContainer";



const MyPosts = ({posts, updateNewPostText, onAddPost, }: PostsPropsType) => {

    const postsElements = posts.posts.map(p => <Post key = {p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        if (newPostElement.current?.value) {
            onAddPost()
        }
    }
    const onPostChange = () => {
        let text = newPostElement.current?.value;
        if (text){
            updateNewPostText(text)
        }
    }

    return (
        <div className='content'>
            <h3>My posts</h3>
            <textarea
                className={s.textarea}
                ref={newPostElement}
                value={posts.newPostText}
                onChange={onPostChange}
            />
            <button onClick={addPost}>Add post</button>
            <div className='posts'>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;