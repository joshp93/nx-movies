import { Movie } from "./movie.model";

export class SearchResult {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}
