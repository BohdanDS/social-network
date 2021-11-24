import {FriendsSideBar} from "../../../Redux/state";
import s from "./FriendsList.module.css"


const FriendsList = (props: FriendsSideBar) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src={props.avatar}/>
            <div>{props.name}</div>
        </div>
    )
}
export default FriendsList