
export const convertQueryURLToObject = <T extends {[k: string]: string}>(): Partial<T> => {
    try {
        var search = window.location.search.substring(1);
        return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    } catch (error: any) {
        return {} as T
    }
}

type Json = { [key: string]: any }

export const convertObjectToQueryURL = (data: Json) => {
    return Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

export const changeQueryURL = (data: Json) => {
    return window.location.pathname + '?' + Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}