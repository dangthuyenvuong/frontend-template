import { Product } from "./Product";

export interface Order {
    _id: string
    address: string,
    amount: number,
    email: string,
    list: {product: Product, num: number}[],
    name: string,
    note: string,
    paymentMethod: string,
    phone: string,
    shippingFree: string,
    shippingSelected: string,
    status: string,
    total: number,
    user: string,
    vat: number
}