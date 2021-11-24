import s from "./Friends.module.css"
import { FriendsSideBarArray} from "../../Redux/state";
import FriendsList from "./FriendsList/FriendsList";

export type FriendsPropsType = {
    friends: FriendsSideBarArray
}

const Friends = (props: FriendsPropsType) => {

    let friendsElement = props.friends.map(friend => {
        return (
            <FriendsList avatar={friend.avatar} name={friend.name}/>
        )
    })

    return (
        <div className={s.sideBar}>
            <div>MY Friends</div>
            {friendsElement}
        </div>
    )
}

export default Friends