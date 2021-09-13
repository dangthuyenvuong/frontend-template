import { useMemo } from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import { TranslateProvider } from './translate'




export const AppProvider = ({ children, reducers, language = 'en', translate }) => {

    let store = useMemo(() => {

        const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
            window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;


        let combineReducer = combineReducers({
            ...reducers,
        })

        return createStore(combineReducer, composeEnhancers())
    }, [])

    return (
        <BrowserRouter>
            <Provider store={store}>
                <TranslateProvider language={language} translate={translate}>
                    {children}
                </TranslateProvider>
            </Provider>
        </BrowserRouter>
    )
}