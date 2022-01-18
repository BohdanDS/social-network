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
    items: Array<UserType>,
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: UsersType = {
    items: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
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
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.page}
        case "SET-TOTAL-COUNT": {
            return {...state, totalCount: action.payload.totalCount}
        }
        case "SET-FETCHING": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}
export type ActionTypes =
    followType
    | unfollowType
    | setUsersType
    | setCurrentPageType
    | setTotalCountType
    | setFetchingType

export type followType = ReturnType<typeof follow>
export const follow = (usedId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            id: usedId
        }
    } as const
}
export type unfollowType = ReturnType<typeof unFollow>
export const unFollow = (usedId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            id: usedId
        }
    } as const
}

export type setUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users: users
        }
    } as const
}
export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            page
        }
    } as const
}
export type setTotalCountType = ReturnType<typeof setTotalCount>
export const setTotalCount = (totalCount: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        payload: {
            totalCount
        }
    } as const
}
export type setFetchingType = ReturnType<typeof setFetching>
export const setFetching = (isFetching: boolean) => {
    return {
        type: 'SET-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

export default usersReducer