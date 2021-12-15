import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/state";


export type ProfileTypeProps = {
    profilePage: ProfilePageType
    addPost:()=>void
    newPostText:string
    changeNewPostText: (postTitle:string)=>void
    dispatch: (action: ActionsTypes) =>void
}

const Profile = (props: ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.profilePage.posts} addPost={props.addPost} newPostText={props.newPostText} changeNewPostText={props.changeNewPostText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile