class Http {
    _token = false
    token() {
        this._token = true
        return this
    }

    _setupHeader(requestInit?: RequestInit): RequestInit {

        let token = JSON.parse(localStorage.getItem('token') || '{}')

        let response = {
            ...requestInit,
            headers: {
                'Content-Type': 'application/json',
                ...(this._token ? { 'Authorization': `Beare ${token.accessToken}` } : {})
            },
            ...(requestInit?.body ? { body: JSON.stringify(requestInit.body) } : {}),
        }

        this._token = false

        return response
    }
    get<T>(url: string): Promise<T> {
        let requestInit = this._setupHeader()
        return fetch(url, requestInit).then(res => res.json())
    }
    post<T>(url: string, data?: any): Promise<T> {

        let requestInit = this._setupHeader({ body: data, method: 'POST' })
        return fetch(url, requestInit).then(res => res.json())
    }
    put() { }
    delete() { }
}

export const http = new Http()
