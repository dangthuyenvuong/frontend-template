import { User } from "@types";
import { AUTH_ERROR, AUTH_LOGOUT, LOGIN } from "store/type"



type AuthStoreState = {
    user?: User,
    login: boolean,
    error?: string,
    permission: string[],
    role: string
}

type PayloadAction = {
    type: string,
    payload: AuthStoreState['user'] | {
        user: AuthStoreState['user'],
        permission: string[]
    } | string
}

let user: AuthStoreState['user'];

try {
    user = JSON.parse(localStorage.getItem('login') || '')
} catch (err) {
}



const initState: AuthStoreState = {
    user,
    login: !!user,
    permission: ['product:view', 'product:create'],
    role: 'editor'
}




const authReducer = (state = initState, action: any): AuthStoreState => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                login: true
            } as AuthStoreState

        case AUTH_LOGOUT:
            return {
                login: false,
                user: undefined
            } as AuthStoreState
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            } as AuthStoreState
    }
    return state
}

export default authReducer