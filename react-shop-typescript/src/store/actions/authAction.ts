import { User } from "@types"
import { AUTH_ERROR, AUTH_LOGOUT, FETCH_LOGIN, LOGIN } from "store/type"

type LoginRequest = {
    username: string,
    password: string
}
export const authFetchAction = (user: LoginRequest) => {
    return {
        type: FETCH_LOGIN,
        payload: user
    }
}



export const authLogin = (user: User) => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const authLogoutAction = () => {
    return {
        type: AUTH_LOGOUT
    }
}


export const authError = (error: string) => {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}