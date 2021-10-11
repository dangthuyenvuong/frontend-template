import { Token, User } from "@types"
import { http } from "core"

let productApi = process.env.REACT_APP_PRODUCT_API || ''


export type AuthLoginResponse = {
    data?: User & { token: Token }
    error?: string
}

const authService = {
    async login(user: { username: string, password: string }) {
        return http.post<AuthLoginResponse>(`${productApi}/login`, user)
    }
}

export default authService

