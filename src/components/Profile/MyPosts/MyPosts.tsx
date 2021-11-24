import React from "react";
import p from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostPropsType} from "../../../Redux/state";

const MyPosts = (props: {state:Array<PostPropsType>}) => {

    let myPostsElement = props.state.map(post => {
        return (
            <Post title={post.postTitle} likesCount={post.likesCount} imageLink={post.imageLink}/>
        )
    })

    return (
        <div className={p.postsBlock}>
            <div><h3>My posts</h3></div>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            {myPostsElement}
        </div>
    )
}

export default MyPosts