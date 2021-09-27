import React from 'react'
import { useMemo } from 'react'
import { combineReducers, createStore, compose, Reducer, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { TranslateProvider } from './translate'
import { Saga } from '@redux-saga/types'
import createSagaMiddleware from '@redux-saga/core'


// export const AppProvider = ({ children, reducers, translate, language = "en" }) => {
//     let store = useMemo(() => {
//         const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
//             window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

//         let combReducers = combineReducers({
//             ...reducers,
//         })

//         // let reducers = authReducer



//         // export let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//         // export let store = createStore(authReducer, applyMiddleware(thunk))
//         return createStore(combReducers, composeEnhancers())
//     }, [])
//     return (
//         <Router>
//             <Provider store={store}>
//                 <TranslateProvider language={language} translate={translate}>
//                     {children}
//                 </TranslateProvider>
//             </Provider>
//         </Router>
//     )
// }

type AppProviderProp = {
    reducers: Reducer,
    language: string,
    saga: Saga
    translate: {
        [key: string]:  {
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
        <Router>
            <Provider store={store}>
                <TranslateProvider language={language} translate={translate}>
                    {children}
                </TranslateProvider>
            </Provider>
        </Router>
    )
}


