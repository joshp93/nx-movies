import { Component, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/models/movie-detail.model';
import { Movie } from 'src/app/models/movie.model';
import { TMDBService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  showDetail: boolean;
  movieDetail: MovieDetail;
  page: number;
  totalPages: number;
  totalResults: number;
  searchValue: string;
  searchBack: boolean;

  constructor(private tmdbService: TMDBService) { }

  ngOnInit(): void {
  }

  search(value: string, page: number, searchBack: boolean) {
    this.tmdbService.getMovies(value, page).subscribe(
      result => {
        this.movies = new Array<Movie>();
        result.results.map((movie) => {
          this.movies.push(new Movie(movie));
        });
        this.page = result.page;
        this.totalPages = result.total_pages;
        this.totalResults = result.total_results;
      });
      this.searchValue = value;
      this.searchBack = searchBack;
  }

  getDetails(id: number) {
    this.tmdbService.getMovieDetail(id).subscribe(
      (result) => {
        this.movieDetail = result;
        this.showDetail = true;
      }
    );
  }
}
