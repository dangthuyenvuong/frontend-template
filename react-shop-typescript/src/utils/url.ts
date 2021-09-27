type Objected = {
    [key: string]: string
}

export const convertQueryURLToObject = <T extends Objected>(): Partial<T> => {
    try {
        var search = window.location.search.substring(1);
        console.log('search: ' + search)
        return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    } catch(error: any) {
        return {} as T
    }
}

type Json = {
    [key: string]: any
}

export const convertObjectToQueryURL = (data: Json) => {
    return Object.keys(data).map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    }).join('&')
}

export const changeQueryURL = (data: Json) => {
    return window.location.pathname + '?' + Object.keys(data).map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    }).join('&')
}