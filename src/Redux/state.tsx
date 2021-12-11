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
    newTextMessage: string
}
export type FriendsSideBar = {
    avatar: string
    name: string
}


export type FriendsSideBarArray = Array<FriendsSideBar>

export type StoreType ={
    _state: StateType
    _callSubscriber:() => void
    subscribe:(callback: ()=>void)=>void
    getState:()=> StateType
    addPost:()=>void
    addMessage:()=>void
    changeNewMessageText:(tMessage: string) => void
    changeNewPostText: (pMessage: string)=> void
}




let store:StoreType = {
    _state: {
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
        newPostText: 'New Post Text',
        newTextMessage: "New Text Message"
    },
    _callSubscriber() {
        console.log('Changed')
    },
    subscribe  (callback)  {
        this._callSubscriber = callback  //----Observer pattern----
        // console.log('rerender was updated from index.tsx')
    },

    getState () {
        return this._state
    },

    addPost () {
        if (this._state.newPostText){
            let newPost: PostPropsType = {id: 5, postTitle: this._state.newPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this.changeNewPostText('')
            this._callSubscriber()

        }
    },
    addMessage () {
        if (this._state.newTextMessage) {
            let newMessage: MessagePropsType = {id: 10, messageText: this._state.newTextMessage}
            this._state.messagePage.messages.push(newMessage)
            this._callSubscriber()
        }
    },
    changeNewMessageText  (tMessage: string)  {
        this._state.newTextMessage = tMessage
        this._callSubscriber()
    },
    changeNewPostText (pMessage: string) {
        this._state.newPostText = pMessage
        this._callSubscriber()
    }

}

export default store