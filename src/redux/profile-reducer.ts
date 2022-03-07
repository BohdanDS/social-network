import {v1} from "uuid";
import {Dispatch} from "redux";
import {getUserProfileById, ProfileAPI} from "../API/api";


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
    status: string
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

export type ProfileActionsTypes =
    ReturnType<typeof addPostCreator>
    | setUserProfileType
    | ReturnType<typeof getUserProfileStatus>
    | ReturnType<typeof updateUserProfileStatus>

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
        status: '',
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
            let newPost: PostType = {id: v1(), message: action.postText, likesCount: 0};
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile}
        }
        case "GET-USER-PROFILE": {
            return {...state, profile: {...state.profile, status: action.status}}
        }
        case "UPDATE-STATUS": {
            return {...state, profile: {...state.profile, status: action.newStatus}}
        }
        default:
            return state;
    }
}
//ACTION CREATORS
export const addPostCreator = (postText: string) => {
    return {
        type: "ADD-POST",
        postText
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

export const getUserProfileStatus = (userId: number, status: string) => {
    return {
        type: 'GET-USER-PROFILE',
        userId,
        status,
    } as const
}
export const updateUserProfileStatus = (newStatus: string) => {
    return {
        type: 'UPDATE-STATUS',
        newStatus
    } as const
}

//THUNK
export const getProfileById = (userId: number) => (dispatch: Dispatch) => {
    getUserProfileById(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getProfileStatus = (userId: number) => (dispatch: Dispatch) => {
    ProfileAPI.getStatus(userId)
        .then(response => {
            dispatch(getUserProfileStatus(userId, response.data))
        })
}

export const updateProfileStatus = (newStatus: string) => (dispatch: Dispatch) => {
    ProfileAPI.updateStatus(newStatus)
}

export default profileReducer;

