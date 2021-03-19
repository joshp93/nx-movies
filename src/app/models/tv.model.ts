export class TV {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;

    constructor(tv: TV) {
        this.backdrop_path = tv.backdrop_path ? tv.backdrop_path : "../../assets/missing.jpg";
        this.first_air_date = tv.first_air_date;
        this.genre_ids = tv.genre_ids;
        this.id = tv.id;
        this.name = tv.name;
        this.origin_country = tv.origin_country;
        this.original_language = tv.original_language;
        this.original_name = tv.original_name;
        this.overview = tv.overview;
        this.popularity = tv.popularity;
        this.poster_path = tv.poster_path ? tv.poster_path : "../../assets/missing.jpg";
        this.vote_average = tv.vote_average;
        this.vote_count = tv.vote_count;
    }
}
