import { Product } from "@types";
import { CART_ADD_CART, CART_CHECK_LOGIN, CART_DECREMENT, CART_INCREMENT, CART_REMOVE, CART_TOGGLE_CART } from "store/type";

export function toggleCart(flag?: boolean) {
    return {
        type: CART_TOGGLE_CART,
        payload: flag
    }
}

export function addToCart(product: Product){
    return {
        type: CART_CHECK_LOGIN,
        payload: product
    }
}

export function cartIncrement(id: number){
    return {
        type: CART_INCREMENT,
        payload: id
    }
}

export function cartDecrement(id: number){
    return {
        type: CART_DECREMENT,
        payload: id
    }
}


export function cartRemove(id: number){
    return {
        type: CART_REMOVE,
        payload: id
    }
}