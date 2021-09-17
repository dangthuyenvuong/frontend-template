import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";

export const reducers = combineReducers({
    auth: authReducer,
    cart: cartReducer
})

export type StateStore = ReturnType<typeof reducers>


// let auth = useSelector<StateStore>(store => store.auth)