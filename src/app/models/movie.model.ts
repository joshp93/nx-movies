export class Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

    constructor(movie: Movie) {
        this.adult = movie.adult;
        this.backdrop_path = movie.backdrop_path ? movie.backdrop_path : "../../assets/missing.jpg";
        this.genre_ids = movie.genre_ids;
        this.id = movie.id;
        this.original_language = movie.original_language;
        this.original_title = movie.original_title;
        this.overview = movie.overview;
        this.popularity = movie.popularity;
        this.poster_path = movie.poster_path ? movie.poster_path : "../../assets/missing.jpg";
        this.release_date = movie.release_date;
        this.title = movie.title;
        this.video = movie.video;
        this.vote_average = movie.vote_average;
        this.vote_count = movie.vote_count;
    }
}
