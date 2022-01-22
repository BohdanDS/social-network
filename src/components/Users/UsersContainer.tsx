import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setFetching,
    setTotalCount,
    setUsers,
    unFollow,
    UsersType,
    UserType,
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (usersCount: number) => void
    setFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.users.items,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
    }
}

class UsersAPIComponent extends React.Component<UsersPropsType, AppStateType> {


    componentDidMount() {
        this.props.setFetching(true)
        axios.get<UsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setFetching(true)
        axios.get<UsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalCount={this.props.totalCount} users={this.props.users} currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged} pageSize={this.props.pageSize} unFollow={this.props.unFollow}
                       follow={this.props.follow}
                       isFetching={this.props.isFetching}/>
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
})(UsersAPIComponent)
export default UsersContainer;