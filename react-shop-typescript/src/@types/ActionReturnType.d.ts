declare type ActionReturnType<T> = (param: T) => {
    type: string,
    payload?: any
}