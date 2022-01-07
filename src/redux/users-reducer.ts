export type UserType = {
    followed: boolean
    id: number
    name: string
    photos: {
        large: string
        small: string
    }
    status: string
    uniqueUrlName: string
}

export type UsersType = {
    items: Array<UserType>
}

let initialState: UsersType = {
    items: [
        // {
        //     id: 1,
        //     photos: {
        //         large: 'https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png',
        //         small: ''
        //     },
        //     followed: true,
        //     name: 'Bohdan Peliutkevich',
        //     status: 'TEST MY Status0',
        //     uniqueUrlName: ''
        // }
    ]
}

const usersReducer = (state: UsersType = initialState, action: ActionTypes): UsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                items: state.items.map(m => m.id === action.payload.id ? {...m, followed: true} : m)
            }
        case "UNFOLLOW":
            return {
                ...state,
                items: state.items.map(m => m.id === action.payload.id ? {...m, followed: false} : m)
            }
        case "SET-USERS":
            return {...state, items: [...action.payload.users]}
        default:
            return state
    }
}
export type ActionTypes = followACType | unfollowACType | setUsersACType

export type followACType = ReturnType<typeof followAC>
export const followAC = (usedId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            id: usedId
        }
    } as const
}
export type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (usedId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            id: usedId
        }
    } as const
}

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users: users
        }
    } as const
}

export default usersReducer