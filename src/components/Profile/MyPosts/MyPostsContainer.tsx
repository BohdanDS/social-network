import MyPosts from "./MyPosts";
import {addPostCreator, PostsType} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    posts: PostsType
}

type MapDispatchToPropsType = {
    onAddPost: (postTest: string) => void
}
export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onAddPost: (postTest: string) => {
            dispatch(addPostCreator(postTest))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;