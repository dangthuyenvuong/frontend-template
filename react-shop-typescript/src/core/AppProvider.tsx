import React from 'react'
import { useMemo } from 'react'
import { createStore, compose, Reducer, applyMiddleware } from 'redux'
import { Router,  } from 'react-router-dom'
import { Provider } from 'react-redux'
import { TranslateProvider } from './translate'
import { Saga } from '@redux-saga/types'
import createSagaMiddleware from '@redux-saga/core'
import { createBrowserHistory, } from 'history'


export const history = createBrowserHistory()

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

export const AppProvider: React.FC<AppProviderProp> = ({ children, reducers, language = "en", translate, saga }) => {
    let store = useMemo(() => {
        const composeEnhancers = typeof window === 'object' && (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
            (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

        let sagaRun = createSagaMiddleware()

        let storeT = createStore(reducers, composeEnhancers(applyMiddleware(sagaRun)))

        sagaRun.run(saga)
        return storeT
    }, [])



    return (
        <Router history={history}>
            <Provider store={store}>
                <TranslateProvider language={language} translate={translate}>
                    {children}
                </TranslateProvider>
            </Provider>
        </Router>
    )
}


