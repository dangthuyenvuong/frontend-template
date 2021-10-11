import { Product } from "@types"
import { http } from "core"
let cartApi = process.env.REACT_APP_CART_API || ''

type Cart = {
    list: Product[],
}

const cartService = {
    order(cart: Cart) {
        let url = cartApi + '/ecommerce/v1/order'
        return http.token().post(url, cart)
    }
}
export default cartService