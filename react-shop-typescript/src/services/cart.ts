
const cartService = {
    getCart() {
        try{
            fetch('getCart')
        }catch(err){

        }
        return new Promise((res, reject) => {
            setTimeout(() => {
                res(1)
            }, 0)
        })
    }
}

export default cartService