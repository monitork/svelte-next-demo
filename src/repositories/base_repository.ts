import type {HttpResponse} from "../types";

if (typeof fetch !== 'function') {
    global.fetch = require('node-fetch')
}

export class BaseRepository {
    static url: string = 'https://api.hackerwebapp.com'

    static async get<T>(resource: string) {
        let request = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }
        const response: HttpResponse<T> = await fetch(this.url + resource, request);
        response.parsedBody = await response.json();
        return response;
    }


    static async post<T>(resource: string, body: Map<String, String>): Promise<HttpResponse<T>> {
        let request = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'},
        }
        const response: HttpResponse<T> = await fetch(this.url + resource, request)
        response.parsedBody = await response.json();
        return response;
    }
}
