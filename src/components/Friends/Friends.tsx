import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";
import {FriendType} from "../../redux/store";


type FriendsType = {
  friends: Array<FriendType>
}
const Friends = (props: FriendsType) => {
  const renderFriends = props.friends.map(f => <Friend id={f.id} name={f.name}/>).slice(0, 3)
  return (
    <div className={s.friends}>
      <h3>My friends</h3>
      <ul>
        {renderFriends}
      </ul>
    </div>
  );
}
export default Friends;