
import { PaginateData, Product } from "@types"
import { http } from "core"
import { convertObjectToQueryURL } from "utils"

let productApi = process.env.REACT_APP_PRODUCT_API || ''


export const productService = {
    paginate(fitler?: Object) {

        let url = productApi + '/product' + (fitler ? '?' + convertObjectToQueryURL(fitler) : '')
        return http.get<PaginateData<Product>>(url)
    }
}