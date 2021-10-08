import { useSelector } from "react-redux"
import { createSelector } from "reselect"
import { RootState } from "store"

// export function useCartNumber() {
//     let { list } = useSelector((store: RootState) => store.cart)
//     const num = useMemo(() => {
//         return list.reduce((pre, item) => pre + item.num, 0)
//     }, [list])

//     return num
// }


export const useCart = () => useSelector((store: RootState) => store.cart)


// -------------------------------


const getCartProduct = (store: RootState) => store.cart.list
const getTax = (store: RootState) => store.cart.tax

const getCartNumber = createSelector(getCartProduct, (list) => {
    return list.reduce((pre, item) => pre + item.num, 0)
})

export const useCartNumber = () => useSelector(getCartNumber)




// subtotal

export const getSubtotal = createSelector(getCartProduct, (list) => {
    return list.reduce((pre, item) => pre + item.product.real_price * item.num , 0)
})

export const getTaxPrice = createSelector(getSubtotal, getTax, (subtotal, tax) => {
    return subtotal * tax
})


// total

const getTotal = createSelector(getSubtotal, getTax, (subtotal, tax) => {
    return subtotal * tax  + subtotal
})

export const useTotal = () => useSelector(getTotal)