import { TV } from "./tv.model";

export class TVSearchResult {
    page: number;
    results: TV[];
    total_pages: number;
    total_results: number;
}
