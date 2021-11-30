import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, ProfilePageType} from "../../Redux/state";


export type ProfileTypeProps = {
    profilePage: ProfilePageType
    addPost:()=>void
    newPostText:string
    changeNewPostText: (postTitle:string)=>void
}

const Profile = (props: ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.profilePage.posts} addPost={addPost} newPostText={props.newPostText} changeNewPostText={props.changeNewPostText}/>
        </div>
    )
}

export default Profile