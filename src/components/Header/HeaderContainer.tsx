import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {authUser, logOut} from "../../redux/auth-reducer";
import {withRouter} from "../WithRouter/withRouter";
import {compose} from "redux";


class HeaderAPIComponent extends React.Component<HeaderPropsType, AppStateType> {

    render() {
        return <Header isAuth={this.props.isAuth} userName={this.props.userName} logOut={this.props.logOut}/>
    }

}

type mapStateToPropsType = {
    isAuth: boolean
    userName: string | null
}

type MapDispatchToPropsType = {
    authUser: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => void
    logOut: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        userName: state.auth.email
    }
}

export type HeaderPropsType = mapStateToPropsType & MapDispatchToPropsType

const HeaderContainer = connect(mapStateToProps, {authUser, logOut})(HeaderAPIComponent);
export default HeaderContainer