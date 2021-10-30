export interface User{
    username: string,
    email: string,
    avatar?: {
        link: string,
    }
    phone?: string
    first_name?: string
    last_name?: string
    gender?: string
    birthday?: string,
    permission: string[],
    role: string
}