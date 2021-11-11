import React from "react";
import p from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className="posts">
            <div>My posts</div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post title = "Title 1"/>
            <Post title = "Title 2"/>
            <Post title = "Title 3"/>
        </div>
    )
}

export default MyPosts