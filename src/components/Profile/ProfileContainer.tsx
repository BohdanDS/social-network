import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {setFetching} from "../../redux/users-reducer";
import {withRouter, WithRouterType} from "../WithRouter/withRouter";
import {getUserProfileById} from "../../API/api";

type MapDispatchToPropsType = {
    setFetching: (isFetching: boolean) => void
    setUserProfile: (profile: any) => void
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
        getUserProfileById(userId)
            .then(response => {
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & WithRouterType
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile, setFetching})(WithUrlDataContainerComponent);