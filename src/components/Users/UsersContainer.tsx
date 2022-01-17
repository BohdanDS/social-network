import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import Users from "./Users";

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    selectCurrentPage: (page: number) => void
    totalUsersCount: (usersCount: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.users.items,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        selectCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        totalUsersCount: (usersCount: number) => {
            dispatch(setTotalCountAC(usersCount))
        }
    }

}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;