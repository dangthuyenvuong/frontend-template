class Http {
    _token = false
    token() {
        this._token = true
        return this
    }

    async _handleResponse(res: Response, url: string, requestInit?: any) {
        if (res.status === 403) {
            const token = JSON.parse(localStorage.getItem('token') || '{}')
            if (token?.refreshToken) {
                let refresh = await fetch(`${process.env.REACT_APP_AUTH_API}/elearning/v4/refresh-token`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        refreshToken: token.refreshToken
                    })
                }).then(res => res.json())

                if (refresh?.data?.accessToken) {
                    localStorage.setItem('token', JSON.stringify(refresh.data))

                    if ((requestInit as any)?.headers?.Authorization) {
                        requestInit.headers.Authorization = `Bearer ${refresh?.data?.accessToken}`
                    }

                    return fetch(url, requestInit).then(res => res.json())
                }

            }

        }
        return res.json()
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
        return fetch(url, requestInit).then(res => this._handleResponse(res, url, requestInit))
    }
    post<T>(url: string, data?: any): Promise<T> {

        let requestInit = this._setupHeader({ body: data, method: 'POST' })
        return fetch(url, requestInit).then(res => this._handleResponse(res, url, requestInit))
    }
    put() { }
    delete() { }
}

export const http = new Http()
