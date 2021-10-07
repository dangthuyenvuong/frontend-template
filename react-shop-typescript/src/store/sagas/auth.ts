import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import authService from "services/authService";
import wishlistService from "services/wishlistService";
import { authLogin } from "store/actions/authAction";
import { GET_WISHLIST } from "store/reducers/wishlistReducers";
import { AUTH_LOGOUT, FETCH_LOGIN } from "store/type";

export function* fetchLogin(action: any): any {
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


function* getWishlist(): any {
    try {
        let res = yield call(wishlistService.getwishlist1)
        //    console.log('res: ' + res)
        if (res.error) {

        } else {
            yield put({ type: GET_WISHLIST })
        }
    } catch (err) { }
}


export function logout(): any {
    localStorage.removeItem('login')
}

export function* rootAuthSaga() {
    yield takeLatest(GET_WISHLIST, getWishlist)
    yield takeLatest(FETCH_LOGIN, fetchLogin)
    yield takeLatest(AUTH_LOGOUT, logout)
}