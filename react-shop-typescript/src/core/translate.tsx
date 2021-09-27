import React, { createContext, useState, useCallback, useContext } from 'react'


type TranslateContext = {
    t: (key: string) => string
}

const AppContext = createContext<TranslateContext>({} as TranslateContext)

export const TranslateProvider: React.FC<{
    language?: string,
    translate: any,
    Context?: any
}> = ({ children, language = "en", translate = {}, Context = AppContext }) => {

    let [state, setState] = useState({
        language: localStorage.getItem('lang') || language,
        translate
    })

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
