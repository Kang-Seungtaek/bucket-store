export interface BaseResponse<T> {
    status: number;
    data: {
        body: T
    }
}
