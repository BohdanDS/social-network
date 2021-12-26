import React from 'react';
import s from './Post.module.css';
import {PostTypeProps} from "../../../../redux/store";

const Post = (props: PostTypeProps) => {
  return (
    <div className={s.post}>
      <img src="https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png" alt="profile_img"/>
      {props.message}
      <div>
        <span> Likes:{props.likesCount}</span>
      </div>

    </div>
  );
}
export default Post;