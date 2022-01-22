import {v1} from "uuid";


export type PostType = {
    id: string,
    message: string,
    likesCount: number
}
export type ProfileType = {
    aboutMe: string,
    fullName: string,
    photos: {
        large: string
        small: string
    },
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string
    }
}

export type PostsType = {
    posts: Array<PostType> | []
    newPostText: string
    profile: ProfileType

}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type ProfileActionsTypes =
    ReturnType<typeof addPostCreator>
    | ReturnType<typeof updateNewPOstTextCreator> | setUserProfileType

let initialState: PostsType = {
    posts: [],
    // [
    // {id: v1(), message: "First Post", likesCount: 12},
    // {id: v1(), message: "Hello", likesCount: 3},
    // ],
    newPostText: '',
    profile: {
        aboutMe: '',
        fullName: '',
        photos: {
            large: '',
            small: ''
        },
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        contacts: {
            "facebook": '',
            "website": "",
            "vk": '',
            "twitter": '',
            "instagram": '',
            "youtube": '',
            "github": '',
            "mainLink": ''
        }
    }
}

const profileReducer = (state: PostsType = initialState, action: ProfileActionsTypes): PostsType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {id: v1(), message: state.newPostText, likesCount: 0};
            return {...state, posts: [...state.posts, newPost], newPostText: ''}

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.payload.newText;
            return {...state, newPostText: action.payload.newText};
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile}
        }
        default:
            return state;
    }
}

export const addPostCreator = () => {
    return {
        type: "ADD-POST"
    } as const

}
export const updateNewPOstTextCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {
            newText: text
        },
    } as const
}
export type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profile
        },
    } as const
}

export default profileReducer;

