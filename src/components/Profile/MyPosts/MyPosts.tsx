import React from "react";
import p from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsTypes, addPostActionCreator, changePostActionCreator, PostPropsType} from "../../../Redux/state";

type MyPostType = {
    state: Array<PostPropsType>
    addPost: () => void
    newPostText: string
    changeNewPostText: (postTitle: string) => void
    dispatch: (action: ActionsTypes) =>void
}


const MyPosts = (props: MyPostType) => {

    let myPostsElement = props.state.map(post => {
        return (
            <Post title={post.postTitle} likesCount={post.likesCount} id={post.id}/>
        )
    })


    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator())
        }
    }

    const onChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(changePostActionCreator(text))
        }
    }


    return (
        <div className={p.postsBlock}>
            <div><h3>My posts</h3></div>
            <div>
                <div><textarea ref={newPostElement} value={props.newPostText} onChange={onChangeHandler}/></div>
                <div>
                    <button onClick={addPostHandler}>Add Post</button>
                </div>
            </div>
            {myPostsElement}
        </div>
    )
}

export default MyPosts