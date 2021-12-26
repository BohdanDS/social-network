import React from 'react';
import MyPosts from "./MyPosts";
import {addPostCreator, updateNewPOstTextCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

export type MyPostsContainerType = {
    // posts: Array<PostTypeProps>
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store)=>{
                const addPost = () => {
                    store.dispatch(addPostCreator())
                }

                const onPostChange = (text:string) => {
                    store.dispatch(updateNewPOstTextCreator(text))
                }

                return (<MyPosts posts={store.getState().profilePage.posts} newPostText={store.getState().profilePage.newPostText} onAddPost={addPost} updateNewPostText={onPostChange}/>)}
            }

        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;