

import { PaginateData, Token, User } from "@types"
import { Order } from "@types"
import { http } from "core"

let domain = process.env.REACT_APP_API || ''


export type AuthLoginResponse = {
    data?: User & { token: Token }
    error?: string
}

const userService = {
    getOrder() {
        return http.token().get<PaginateData<Order>>(`${domain}/ecommerce/v1/order`)
    }
}

export default userService

