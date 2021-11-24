import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";


export type ProfileTypeProps = {
    profilePage: ProfilePageType
}

const Profile = (props: ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.profilePage.posts}/>
        </div>
    )
}

export default Profile