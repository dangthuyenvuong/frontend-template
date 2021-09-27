import { GET_WISHLIST } from "store/reducers/wishlistReducers"

const wishlistService = {
    getWishlist() {
        try {
            fetch('/fakeData')
        } catch (err) {}
        return new Promise((res, reject) => {
            
        })
    },

    async getwishlist1() {
        console.log('bbbbbbbbbbbbbbbbbbbbbbb')
        return fetch('/fakeData/wishlistData.json').then(
            res => {
                if(res.status === 200) {
                    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                    return res.json();
                }
            }
        )
    }
}

export default wishlistService