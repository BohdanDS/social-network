import {v1} from "uuid";

export type PostType = {
    id: string,
    message: string,
    likesCount: number
}
export type PostsType = {
    posts: Array<PostType>
    newPostText: string
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type ProfileActionsTypes =
    ReturnType<typeof addPostCreator>
    | ReturnType<typeof updateNewPOstTextCreator>

let initialState: PostsType = {
    posts: [
        {id: v1(), message: "First Post", likesCount: 12},
        {id: v1(), message: "Hello", likesCount: 3},
    ],
    newPostText: ''
}

const profileReducer = (state: PostsType = initialState, action: ProfileActionsTypes): PostsType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {id: v1(), message: state.newPostText, likesCount: 0};
            return {...state, posts: [...state.posts, newPost], newPostText: ''}

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.payload.newText;
            return {...state, newPostText: action.payload.newText};

        default:
            return state;
    }
}

export const addPostCreator = () => {
    return {
        type: "ADD-POST"
    }as const

}
export const updateNewPOstTextCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {
            newText: text
        }
    } as const
}

export default profileReducer;

