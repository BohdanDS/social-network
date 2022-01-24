import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {authUser} from "../../redux/auth-reducer";
import {setUserProfile} from "../../redux/profile-reducer";
import {authorizeUser} from "../../API/api";


class HeaderContainer extends React.Component<HeaderPropsType, AppStateType> {

    componentDidMount() {
        authorizeUser().then(response => {
                if (response.data.resultCode === 0) {
                    let schema = response.data.data
                    this.props.authUser(schema.id, schema.email, schema.login)
                }
            }
        )
        //Сделать вызов на get profile и засетать пользователя как текущего
    }

    render() {
        return <Header isAuth={this.props.isAuth} authUser={this.props.authUser} userName={this.props.userName}/>
        // return <Header {...this.props}/>
    }

}

type mapStateToPropsType = {
    isAuth: boolean
    userName: string | null
}

type MapDispatchToPropsType = {
    authUser: (id: number, email: string, login: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        userName: state.auth.login
    }
}

export type HeaderPropsType = mapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {authUser, setUserProfile})(HeaderContainer);
