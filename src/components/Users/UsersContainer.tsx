import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getUsers,
    removeFollowing,
    setCurrentPage,
    setTotalCount,
    startFollowing,
    UserType,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    idOfUserInProcess: number | null
}
type MapDispatchToPropsType = {
    setCurrentPage: (page: number) => void
    setTotalCount: (usersCount: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    removeFollowing: (userId: number) => void
    startFollowing: (userId: number) => void
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
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalCount={this.props.totalCount} users={this.props.users} currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged} pageSize={this.props.pageSize}
                       idOfUserInProcess={this.props.idOfUserInProcess}
                       removeFollowing={this.props.removeFollowing}
                       startFollowing={this.props.startFollowing}
                />
            </>
        );
    }
}


export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const UsersContainer = connect(mapStateToProps, {
    setCurrentPage,
    setTotalCount,
    getUsers,
    removeFollowing,
    startFollowing,
})(UsersAPIComponent)
export default UsersContainer;