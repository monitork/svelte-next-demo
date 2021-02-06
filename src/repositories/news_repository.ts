import type {News} from "../types";
import {BaseRepository} from "./base_repository";

export const fetchAllNews = async (): Promise<News[]> => {
    try {
        const res = await BaseRepository.get<News[]>(`/news`);
        console.log(res)
        return res.parsedBody;
    } catch (e) {
        throw e;
    }
}
