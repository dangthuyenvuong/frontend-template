export interface PaginateData<T> {
    data: T[],
    paginate: {
        currentPage: number,
        totalPage: number,
        count: number,
    }
}