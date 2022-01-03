import s from './Friends.module.css';
import Friend from "./Friend/Friend";
import {FriendsPropsType} from "./FriendsContainer";



const Friends = (props: FriendsPropsType) => {
  const renderFriends = props.friends.friends.map(f => <Friend key = {f.id} id={f.id} name={f.name}/>).slice(0, 3)
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