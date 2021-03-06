import axios from "axios";
import {UsersType} from "../redux/users-reducer";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fdbb564c-a244-4702-bf65-bab4b0fb11e9"
    },
})

export const UserAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const authorizeUser = () => {
    return instance.get('auth/me')
}
export const Auth = {
    authMe() {
        return instance.get('auth/me')
    },
    loginByCredentials(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logOut() {
        return instance.delete('auth/login')
    }

}

export const ProfileAPI = {
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

export const FollowAPI = {
    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
    }
}


export const getUserProfileById = (userId: number) => {
    return instance.get(`profile/${userId}`)
}
