import { GET_WISHLIST } from "store/reducers/wishlistReducers";


type wishtlistDemoFake = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default wishtlistDemoFake

export const wishlistAction: ActionReturnType<wishtlistDemoFake> = () => {
    return{
        type: GET_WISHLIST
        // payload: wishlist
    };
}