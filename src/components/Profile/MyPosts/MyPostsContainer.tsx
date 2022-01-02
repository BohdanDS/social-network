import MyPosts from "./MyPosts";
import {addPostCreator, PostsType, updateNewPOstTextCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    posts: PostsType
}

type MapDispatchToPropsType = {
    onAddPost: () => void
    updateNewPostText: (text: string) => void
}
export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onAddPost: () => {
            dispatch(addPostCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPOstTextCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;