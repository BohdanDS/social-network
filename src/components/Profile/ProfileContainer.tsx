import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileById, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {setFetching} from "../../redux/users-reducer";
import {withRouter, WithRouterType} from "../WithRouter/withRouter";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapDispatchToPropsType = {
    setFetching: (isFetching: boolean) => void
    setUserProfile: (profile: any) => void
    getProfileById: (userId: number) => void

}

type MapStateToPropsType = {
    profile: ProfileType
}

class ProfileContainer extends React.Component<ProfilePropsType, AppStateType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfileById(userId)
    }

    render() {
        return (
            <div className='content'>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & WithRouterType


export default compose<React.ComponentType>(
    WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        setUserProfile,
        setFetching,
        getProfileById
    })
)
(ProfileContainer)