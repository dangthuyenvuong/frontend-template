import wishlistService from "services/wishlistService"
import { call, put, takeLatest } from 'redux-saga/effects'
import { wishlistAction } from "store/actions/wishlistAction"
import { GET_WISHLIST } from "./reducers/wishlistReducers"
import { AUTH_LOGOUT, FETCH_LOGIN } from "./type"
import { fetchLogin, logout } from "./sagas/auth"



function* getWishlist(): any {
    try {
       let res = yield call(wishlistService.getwishlist1)
    //    console.log('res: ' + res)
       if (res.error) {

       } else {
           yield put({ type: GET_WISHLIST })
       }
    } catch(err) {}
}

function* saga() {
    yield takeLatest(GET_WISHLIST, getWishlist) 
    yield takeLatest(FETCH_LOGIN, fetchLogin) 
    yield takeLatest(AUTH_LOGOUT, logout)
}

export default saga