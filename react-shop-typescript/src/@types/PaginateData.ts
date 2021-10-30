
export interface IPaginate {
    currentPage: number,
    totalPage: number,
    count: number,
}


export interface PaginateData<T> {
    data: T[],
    paginate: IPaginate
}