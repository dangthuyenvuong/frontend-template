import { AUTH_ERROR, AUTH_LOGOUT, LOGIN } from "store/type"



type AuthStoreState = {
    user?: {
        name: string,
        avatar: string
    },
    login: boolean,
    error?: string
}

type PayloadAction = {
    type: string,
    payload: AuthStoreState['user'] | string
}

let user: AuthStoreState['user'];

try {
    user = JSON.parse(localStorage.getItem('login') || '')
} catch (err) {
}



const initState: AuthStoreState = {
    user,
    login: !!user,
    
}




const authReducer = (state = initState, action: PayloadAction) : AuthStoreState => {
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