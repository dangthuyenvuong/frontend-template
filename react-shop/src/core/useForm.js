import { useState } from "react"

let patternModel = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})/,
    url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
}

export function useForm(initvalue = {}) {

    let [form, setForm] = useState(initvalue)
    let [error, setError] = useState({})
    let [initRule, setInitRule] = useState({})
    let [initMessage, setInitMessage] = useState({})


    function inputChange(ev) {
        let name = ev.currentTarget.name
        let value = ev.currentTarget.value

        form[name] = value
    }

    function check() {

        let errorObj = {}

        for (let i in initRule) {
            let r = initRule[i]
            if (r.required && !form[i]?.trim()) {
                errorObj[i] = initMessage?.[i]?.required || 'Trường này không được để trống'
                continue
            }

            if (r.pattern) {
                let pattern = r.pattern
                if (r.pattern in patternModel) {
                    pattern = patternModel[r.pattern]
                }
                if(form[i] && !('test' in pattern && pattern.test(form[i]))){
                    errorObj[i] = initMessage?.[i]?.pattern || 'Trường này không đúng định dạng'
                }
            }

            if(r.min && form[i]?.length < r.min){
                errorObj[i] = initMessage?.[i]?.min || `Trường này phải dài hơn ${r.min} ký tự`
            }

            if(r.max && form[i]?.length > r.max){
                errorObj[i] = initMessage?.[i]?.max || `Trường này không được nhiều hơn ${r.max} ký tự`
            }

        }

        return errorObj;
    }

    function register(name, rule, message) {
        if (!form[name]) {
            form[name] = ''
        }

        if (rule) {

            initRule[name] = rule
        }

        if(message){
            initMessage[name] = message
        }

        return {
            name,
            onChange: inputChange,
            defaultValue: form[name]
        }
    }
    function handleSubmit(callback) {
        return (ev) => {
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