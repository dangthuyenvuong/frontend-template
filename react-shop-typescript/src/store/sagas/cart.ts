import { put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { StateStore } from "store";
import { AUTH_LOGOUT, CART_ADD_CART, CART_CHECK_LOGIN, CART_CLEAR_CART, CART_DECREMENT, CART_INCREMENT, CART_REMOVE, LOGIN } from "store/type";
import { history } from "core";

export function* changeCart(): any {
    let store: StateStore = yield select()

    localStorage.setItem('cart', JSON.stringify(store.cart.list))
}

export function* addCartCheckLogin(action: any): any {
    let store: StateStore = yield select()
    if (store.auth.login) {
        yield put({ type: CART_ADD_CART, payload: action.payload })
    } else {
        history.push('/auth/login')
    }
}
export function* clearCart() {
    yield put({ type: CART_CLEAR_CART })
}

export function* loginGetCart() {
    // gpi api get cart cua user login
    // update cart cho user


    // kiem tra cart hien tai
    // neu co -> goi api update cart cua user do
    // neu ko -> goi api get cart cua user do va update cart local
}

export function* cartRootSaga(){
    yield takeLatest(LOGIN, loginGetCart)
    yield takeLatest(AUTH_LOGOUT, clearCart)
    yield takeEvery(CART_CHECK_LOGIN, addCartCheckLogin)
    yield takeLatest([CART_ADD_CART, CART_REMOVE, CART_INCREMENT, CART_DECREMENT, CART_CLEAR_CART], changeCart)
}