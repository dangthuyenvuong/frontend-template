import { all } from 'redux-saga/effects';
import { rootAuthSaga } from './sagas/auth';
import { cartRootSaga } from './sagas/cart';


function* saga() {
    yield all([
        cartRootSaga(),
        rootAuthSaga()
    ])
}

export default saga