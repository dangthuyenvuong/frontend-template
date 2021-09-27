import { call, put } from "@redux-saga/core/effects";
import authService from "services/authService";
import { authLogin } from "store/actions/authAction";

export function* fetchLogin(action: any) : any{
    try {
        let user = yield call(authService.login, action.payload)

        if (user.error) {

        } else {
            localStorage.setItem('login', JSON.stringify(user))
            yield put(authLogin(user))
        }
    } catch (error) {

    }
}

export function* logout() : any{
    localStorage.removeItem('login')
}