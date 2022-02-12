import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileById,
    getProfileStatus,
    ProfileType,
    setUserProfile,
    updateProfileStatus
} from "../../redux/profile-reducer";
import {setFetching} from "../../redux/users-reducer";
import {withRouter, WithRouterType} from "../WithRouter/withRouter";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapDispatchToPropsType = {
    setFetching: (isFetching: boolean) => void
    setUserProfile: (profile: any) => void
    getProfileById: (userId: number) => void
    getProfileStatus: (userId:number)=>void
    updateProfileStatus:(newStatus:string)=>void

}

type MapStateToPropsType = {
    profile: ProfileType
}

class ProfileContainer extends React.Component<ProfilePropsType, AppStateType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 21643
        }
        this.props.getProfileById(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return (
            <div className='content'>
                <Profile profile={this.props.profile} updateProfileStatus={this.props.updateProfileStatus} />
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & WithRouterType


export default compose<React.ComponentType>(
    // WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        setUserProfile,
        setFetching,
        getProfileById,
        getProfileStatus,
        updateProfileStatus
    })
)
(ProfileContainer)