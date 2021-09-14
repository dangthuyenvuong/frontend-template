import React, { useState } from "react"
import { ObjectType } from "typescript"

let patternModel: { [key: string]: RegExp } = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})/,
    url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
}


type FormState = {
    [k: string]: any
}


type RuleItem = {
    min?: number,
    max?: number,
    required?: true,
    pattern?: RegExp | string
}
type RuleState = {
    [k: string]: RuleItem
}

type MessageState = {
    [k: string]: any
}

type ErrorState<T extends Object> = {
    [k in T]: any
}

type UseFormReturn<T> = {
    register: (name: keyof T, rule: any) => {
        name: string,
        onChange: Function,
        defaultValue: any
    },
    handleSubmit: Function,
    form: T,
    error: Function
}

export function useForm<T extends Object>(initvalue = {}): UseFormReturn<T> {

    let [form, setForm] = useState<T>(initvalue as T)
    let [error, setError] = useState<ErrorState<T>>({})
    let [initRule, setInitRule] = useState<RuleState>({})
    let [initMessage, setInitMessage] = useState<MessageState>({})

    function inputChange(ev: any) {
        let name = ev.currentTarget.name
        let value = ev.currentTarget.value

        form[name] = value
    }

    function check() {

        let errorObj: any = {}

        for (let i in initRule) {
            let r = initRule[i]
            if (r.required && !form[i]?.trim()) {
                errorObj[i] = initMessage?.[i]?.required || 'Trường này không được để trống'
                continue
            }

            if (r.pattern) {
                let pattern = r.pattern
                if (patternModel[r.pattern as string]) {
                    pattern = patternModel[r.pattern as string]
                }
                if (form[i] && !(pattern instanceof RegExp && pattern.test(form[i]))) {
                    errorObj[i] = initMessage?.[i]?.pattern || 'Trường này không đúng định dạng'
                }
            }

            if (r.min && form[i]?.length < r.min) {
                errorObj[i] = initMessage?.[i]?.min || `Trường này phải dài hơn ${r.min} ký tự`
            }

            if (r.max && form[i]?.length > r.max) {
                errorObj[i] = initMessage?.[i]?.max || `Trường này không được nhiều hơn ${r.max} ký tự`
            }

        }

        return errorObj;
    }

    function register(name: string, rule?: RuleItem, message?: any) {
        if (!form[name]) {
            form[name] = ''
        }

        if (rule) {

            initRule[name] = rule
        }

        if (message) {
            initMessage[name] = message
        }

        return {
            name,
            onChange: inputChange,
            defaultValue: form[name]
        }
    }
    function handleSubmit(callback: Function) {
        return (ev: any) => {
            ev.preventDefault()
            let errorObject = check()
            if (Object.keys(errorObject).length === 0) {
                callback(form)
            } else {
                setError(errorObject)
            }
        }
    }

    return {
        register,
        handleSubmit,
        form,
        error
    }
}



