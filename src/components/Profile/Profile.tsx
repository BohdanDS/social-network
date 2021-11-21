import React from "react";
import p from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "../../index";



export type ProfileTypeProps = {
    myPosts: Array<PostPropsType>
}

const Profile = (props: ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPosts={props.myPosts}/>
        </div>
    )
}

export default Profile