import { call, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { RootState } from "store";
import { AUTH_LOGOUT, CART_ADD_CART, CART_CHECK_LOGIN, CART_CLEAR_CART, CART_DECREMENT, CART_INCREMENT, CART_REMOVE, CART_SET_CART, LOGIN } from "store/type";
import { history } from "core";
import cartService from "services/cartService";

export function* changeCart(): any {
    let store: RootState = yield select()

    localStorage.setItem('cart', JSON.stringify(store.cart.list))

    yield call(cartService.updateCart, { list: store.cart.list })

}

export function* addCartCheckLogin(action: any): any {
    let store: RootState = yield select()
    if (store.auth.login) {
        yield put({ type: CART_ADD_CART, payload: action.payload })
    } else {
        history.push('/auth/login')
    }
}
export function* clearCart() {
    yield put({ type: CART_CLEAR_CART })
}

export function* loginGetCart(): any {
    let res = yield call(cartService.getCartFromUser)
    if (res?.data?.list) {
        localStorage.setItem('cart', JSON.stringify(res.data.list))
        yield put({
            type: CART_SET_CART,
            payload: res.data.list
        })
    }
}

export function* cartRootSaga() {
    yield takeLatest(LOGIN, loginGetCart)
    yield takeLatest(AUTH_LOGOUT, clearCart)
    yield takeEvery(CART_CHECK_LOGIN, addCartCheckLogin)
    yield takeLatest([CART_ADD_CART, CART_REMOVE, CART_INCREMENT, CART_DECREMENT, CART_CLEAR_CART], changeCart)
}