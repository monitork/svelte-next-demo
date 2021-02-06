export interface HttpResponse<T> extends Response {
    parsedBody?: T
}

export interface News {
    id: number,
    title: String,
    points: Number,
    user: String,
    time:number,
    time_ago: String,
    comments_count: number,
    type: String,
    url: String
    domain: string
}
