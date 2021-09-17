import { Saga } from "@redux-saga/types"
import createSagaMiddleware from "@redux-saga/core"
import { useMemo } from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { combineReducers, createStore, applyMiddleware, compose, Reducer } from "redux"
import { TranslateProvider } from './translate'


type AppProviderProp = {
    reducers: Reducer,
    language: string,
    saga: Saga
    translate: {
        [key: string]: {
            [key: string]: string
        }
    }
}

export const AppProvider: React.FC<AppProviderProp> = ({ children, reducers, language = 'en', translate, saga }) => {

    let store = useMemo(() => {

        const composeEnhancers = typeof window === 'object' && (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
            (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

        let sagaRun = createSagaMiddleware()

        let storeT = createStore(reducers, composeEnhancers(applyMiddleware(sagaRun)))

        sagaRun.run(saga)

        return storeT

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