import { AUTH_LOGOUT, FETCH_LOGIN, LOGIN } from "store/type"


type User = {
    username: string,
    password: string
}
export const authFetchAction = (user: User) => {
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
