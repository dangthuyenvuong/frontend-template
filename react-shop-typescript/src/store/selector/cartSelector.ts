import { useMemo } from "react"
import { useSelector } from "react-redux"
import { StateStore } from "store"

export function useCartNumber() {
    let { list } = useSelector((store: StateStore) => store.cart)
    const num = useMemo(() => {
        return list.reduce((pre, item) => pre + item.num, 0)
    }, [list])

    return num
}