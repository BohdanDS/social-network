import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType
    updateProfileStatus:(newStatus:string)=>void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className='content'>
            <ProfileInfo aboutMe={props.profile.aboutMe} fullName={props.profile.fullName} photos={props.profile.photos}
                         userId={props.profile.userId} contacts={props.profile.contacts}
                         lookingForAJob={props.profile.lookingForAJob}
                         lookingForAJobDescription={props.profile.lookingForAJobDescription}
                         status={props.profile.status}
                         updateProfileStatus={props.updateProfileStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;