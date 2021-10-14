import { Product } from "@types"
import { http } from "core"
let cartApi = process.env.REACT_APP_CART_API || ''

type Cart = {
    list: Product[],
}

const cartService = {
    order() {
        let url = cartApi + '/ecommerce/v1/order'
        return http.token().post<any>(url)
    },
    updateCart(cart: any) {
        let url = cartApi + '/ecommerce/v1/cart'
        return http.token().post(url, cart)
    },
    getCartFromUser() {
        let url = cartApi + '/ecommerce/v1/cart'
        return http.token().get<any>(url)
    }
}
export default cartService