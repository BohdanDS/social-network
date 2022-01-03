import Friends from "./Friends";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {SidebarType} from "../../redux/sidebar-reducer";

type mapStateToPropsType = {
    friends: SidebarType
}

export type FriendsPropsType = mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        friends: state.sidebar
    }
}
const FriendsContainer = connect(mapStateToProps)(Friends)
export default FriendsContainer;