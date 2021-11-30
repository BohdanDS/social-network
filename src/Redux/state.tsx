import {rerenderEntireThree} from "../render";

export type DialogItemPropsType = {
    id: number
    name: string
    avatar: string
}
export type MessagePropsType = {
    id: number
    messageText: string
}
export type PostPropsType = {
    id: number
    postTitle: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostPropsType>
}
export type MessagePageType = {
    messages: Array<MessagePropsType>,
    dialogs: Array<DialogItemPropsType>
}

export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    friends: FriendsSideBarArray
    newPostText: string
}

export type FriendsSideBar = {
    avatar: string
    name: string
}

export const addPost = () => {
    if (state.newPostText){
        let newPost: PostPropsType = {id: 5, postTitle: state.newPostText, likesCount: 0}
        state.profilePage.posts.push(newPost)
        changeNewPostText('')
        rerenderEntireThree(state)

    }
}

export const changeNewPostText = (pMessage: string) => {
    state.newPostText = pMessage
    rerenderEntireThree(state)
}

export type FriendsSideBarArray = Array<FriendsSideBar>


let state: StateType = {
    profilePage: {
        posts: [{
            id: 1,
            postTitle: "Post 1 Props",
            likesCount: 12
        },
            {
                id: 2,
                postTitle: "My post 2",
                likesCount: 10
            },
            {
                id: 3,
                postTitle: "My post 3",
                likesCount: 9991
            }]
    },
    messagePage: {
        messages: [
            {id: 1, messageText: "Hi"},
            {id: 2, messageText: "How are you?"},
            {id: 3, messageText: "Lets code"},
            {id: 4, messageText: "Yo"},
            {id: 5, messageText: "Lets go!!!"},
            {id: 6, messageText: "EEEE РОЦК!!!"}
        ],
        dialogs: [
            {
                id: 1,
                name: "Dimych",
                avatar: "https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png"
            },
            {
                id: 2,
                name: "Bohdan",
                avatar: "https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png"
            },
            {
                id: 3,
                name: "Varvar",
                avatar: "https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png"
            },
            {
                id: 4,
                name: "MentosX",
                avatar: "https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png"
            },
            {
                id: 5,
                name: "F",
                avatar: "https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png"
            },
            {
                id: 6,
                name: "TEST",
                avatar: "https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png"
            }
        ]
    },
    friends: [{
                avatar: "https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png",
                name: "Mentos"
            }, {
                avatar: "https://e7.pngegg.com/pngimages/906/448/png-clipart-silhouette-person-person-with-helmut-animals-logo.png",
                name: 'Drug'
            }],
    newPostText:'New Post Text'
}
export default state