import React from 'react';
import Post from "./Post/Post";

import {PostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import TextArea from "../../common/FormControls/TextArea";


const MyPosts = ({posts, onAddPost}: PostsPropsType) => {

    const postsElements = posts.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                     likesCount={p.likesCount}/>)
    const addNewPost = (value: FormDataType) => {
        value.newPostBody && onAddPost(value.newPostBody)
    }


    return (
        <div className='content'>
            <h3>My posts</h3>
            <AddPostFromReduxForm onSubmit={addNewPost}/>
            <div className='posts'>
                {postsElements}
            </div>
        </div>
    )
}
const maxLength30 = maxLengthCreator(30)

const AddPostForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea} name='newPostBody' placeholder='Enter message'
                   validate={[required, maxLength30]}/>
            <div>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}
type FormDataType = {
    newPostBody: string
}
const AddPostFromReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddPostForm)
export default MyPosts;