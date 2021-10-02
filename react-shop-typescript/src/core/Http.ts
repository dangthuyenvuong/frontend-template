class Http {
    get<T>(url: string) : Promise<T>{
        return fetch(url).then(res => res.json())
    }
    post(){}
    put(){}
    delete(){}
}

export const http = new Http()
