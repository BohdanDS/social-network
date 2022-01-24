import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setFetching,
    setFollowingState,
    setTotalCount,
    setUsers,
    unFollow,
    UserType,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {UserAPI} from "../../API/api";

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    idOfUserInProcess: number | null
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (usersCount: number) => void
    setFetching: (isFetching: boolean) => void
    setFollowingState: (idOfUserInProcess: number | null) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.users.items,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        idOfUserInProcess: state.users.idOfUserInProcess,
    }
}

class UsersAPIComponent extends React.Component<UsersPropsType, AppStateType> {


    componentDidMount() {
        this.props.setFetching(true)
        UserAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalCount(response.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setFetching(true)
        UserAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.items)
            })
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalCount={this.props.totalCount} users={this.props.users} currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged} pageSize={this.props.pageSize} unFollow={this.props.unFollow}
                       follow={this.props.follow}
                       isFetching={this.props.isFetching} setFollowingState={this.props.setFollowingState}
                       idOfUserInProcess={this.props.idOfUserInProcess}/>
            </>
        );
    }
}


export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setFetching,
    setFollowingState
})(UsersAPIComponent)
export default UsersContainer;