import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {setFetching, UsersType} from "../../redux/users-reducer";

type MapDispatchToPropsType = {
    setFetching: (isFetching: boolean) => void
    setUserProfile: (profile: any) => void
}

type MapStateToPropsType = {
    profile: ProfileType
}


class ProfileContainer extends React.Component<ProfilePropsType, AppStateType> {

    componentDidMount() {
        axios.get<UsersType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // this.props.setFetching(false)
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div className='content'>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }

}

const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {setUserProfile, setFetching})(ProfileContainer);