import React from "react";
import p from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={p.content}>
            <div><img className={p.img} src="https://www.industrialempathy.com/img/remote/ZiClJf-1280w.avif"/></div>
            <div>AVA + description</div>
            <MyPosts/>

        </div>
    )
}

export default Profile