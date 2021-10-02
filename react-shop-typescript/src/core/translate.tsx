import React, { createContext, useState, useCallback, useContext, useEffect } from 'react'


type TranslateContext = {
    t: (key: string) => string
}

const AppContext = createContext<TranslateContext>({} as TranslateContext)

const _translate : TranslateContext = {
    t : (key: string) => key 
}

export const TranslateProvider: React.FC<{
    language?: string,
    translate: any,
    Context?: any
}> = ({ children, language = "en", translate = {}, Context = AppContext }) => {


    let [state, setState] = useState({
        language: localStorage.getItem('lang') || language,
        translate
    })

    useEffect(() => {
        _translate.t = t
    }, [state])

    const selectLang = useCallback(
        (lang) => {
            setState({
                ...state,
                language: lang
            })

            localStorage.setItem('lang', lang)
        },
        [],
    )

    const t = (name: string): string => {
        return state.translate[state.language]?.[name] || name
    }

    let value = {
        ...state,
        selectLang,
        t
    }

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}


export const useTranslate = () => {
    return useContext(AppContext)
}

export const translate = (key: string) => _translate.t(key)