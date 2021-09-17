type LoginParam = {
    username: string,
    password: string
}


const userService = {
    login(user: LoginParam) {
        try{
            fetch('login')
        }catch(err){

        }
        return new Promise((res, reject) => {
            setTimeout(() => {
                res({
                    data: {
                        ...user,
                        name: 'Đặng Thuyền Vương'
                    }
                })
            }, 0)
        })
    }
}

export default userService