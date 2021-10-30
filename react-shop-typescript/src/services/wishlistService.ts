import { PaginateData, Product } from "@types"
import { http } from "core"

let domain = process.env.REACT_APP_API || ''

const wishlistService = {
    getWishlist(queryString?: string) {
        return http.token().get<PaginateData<Product>>(`${domain}/ecommerce/v1/profile/wishlist${queryString ?? ''}`)
    },
    addWishlist(id: number) {
        return http.token().post(`${domain}/ecommerce/v1/profile/wishlist`, { product_id: id })

    }
}

export default wishlistService