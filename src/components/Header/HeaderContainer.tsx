import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {authorizeCurrentUser, authUser} from "../../redux/auth-reducer";


class HeaderAPIComponent extends React.Component<HeaderPropsType, AppStateType> {

    componentDidMount() {
        this.props.authorizeCurrentUser()
    }

    render() {
        return <Header isAuth={this.props.isAuth} authUser={this.props.authUser} userName={this.props.userName}
                       authorizeCurrentUser={this.props.authorizeCurrentUser}
        />
    }

}

type mapStateToPropsType = {
    isAuth: boolean
    userName: string | null
}

type MapDispatchToPropsType = {
    authUser: (id: number, email: string, login: string) => void
    authorizeCurrentUser: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        userName: state.auth.login
    }
}

export type HeaderPropsType = mapStateToPropsType & MapDispatchToPropsType

const HeaderContainer = connect(mapStateToProps, {authUser, authorizeCurrentUser})(HeaderAPIComponent);
export default HeaderContainer