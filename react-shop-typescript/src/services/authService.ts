


const authService = {
    async login(user: { username: string, password: string }) {
        return new Promise((res, reject) => {
            setTimeout(() => {
                res({
                    username: 'dangthuyenvuong',
                    name: 'Đặng Thuyền Vương'
                })
            }, 3000)
        })
    }
}

export default authService