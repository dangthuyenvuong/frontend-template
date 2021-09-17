import { takeLatest, call, put } from 'redux-saga/effects'
import cartService from 'services/cart'
import userService from 'services/user'
import { TYPE_LOGIN, TYPE_LOGIN_USER } from './reducers/authReducer'
import { TYPE_GET_CART } from './reducers/cartReducer'




function* loginFetch(action: any): any {
    try {
        let res = yield call(userService.login, action.payload)
        if (res.error) {

        } else {
            yield put({ type: TYPE_LOGIN_USER, payload: res.data })
        }
    } catch (err) {

    }
}

function* getCartAfterLogin(): any {
    try {
        let res = yield call(cartService.getCart)
        if (res.error) {

        } else {
            yield put({ type: TYPE_GET_CART })
        }
    } catch (err) {

    }
}

function* saga() {
    yield takeLatest(TYPE_LOGIN, loginFetch)
    yield takeLatest(TYPE_LOGIN_USER, getCartAfterLogin)

}

export default saga