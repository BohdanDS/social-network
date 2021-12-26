import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
  // state: PostsType
  // dispatch: (action: ActionsTypes) => void
}

const Profile = () => {
  return (
    <div className='content'>
      <ProfileInfo/>
        <MyPostsContainer/>
    </div>
  );
}
export default Profile;