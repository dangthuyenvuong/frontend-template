import { createContext, useCallback, useContext, useState } from "react"

type ContextProp = {
    t: (key: string) => string,
    selectLang : (lang: string) => void,
    language: string
}

const Context = createContext<ContextProp>({} as ContextProp)

export const TranslateProvider : React.FC<{
    language?: string,
    translate: any
}> = ({ children, language = 'en', translate = {} }) => {

    let [state, setState] = useState({
        language: localStorage.getItem('lang') || language, 
        translate
    })

    const selectLang = useCallback((lang) => {
        setState({
            ...state,
            language: lang
        })

        localStorage.setItem('lang', lang)
    }, [])

    const t = (name: string) : string => {
        return state.translate[state.language]?.[name] || name
    }

    let value = {
        ...state,
        selectLang,
        t
    }


    return (
        <Context.Provider value={value}>{children}</Context.Provider>
    )
}




export const useTranslate = () => {
    return useContext(Context)
}