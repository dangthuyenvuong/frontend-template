
const initState = {}

export const TYPE_LOGIN = 'LOGIN'
export const TYPE_LOGIN_USER = 'LOGIN_USER'

type UserInfo = {
    username: string,
    password: string
}

export const loginAction: ActionReturnType<UserInfo> = (user: UserInfo) => {
    return {
        type: TYPE_LOGIN,
        payload: user
    }
}


const authReducer = (state = initState, action: any) => {
    console.log(action)
    switch (action.type) {
        case TYPE_LOGIN_USER:
            return {
                ...state,
                user: action.payload
            }
    }
    return state
}

export default authReducer