import React from 'react';
import s from './Friend.module.css';
import {FriendType} from "../../../redux/store";


const Friend = ({id, name, ...props}: FriendType) => {
  return (
        <li key={id} className={s.friend}>
          <img src="https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png" alt=""/>
          {name}
        </li>
  );
}
export default Friend;