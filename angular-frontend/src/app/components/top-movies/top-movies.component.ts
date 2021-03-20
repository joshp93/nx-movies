import { Component, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/models/movie-detail.model';
import { Movie } from 'src/app/models/movie.model';
import { TMDBService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent implements OnInit {
  movies: Movie[];
  showDetail: boolean;
  movieDetail: MovieDetail;

  constructor(private tmdbService: TMDBService) { }

  ngOnInit(): void {
    this.tmdbService.getTopMovies().subscribe(
      (result) => {
        this.movies = result.results;
      }
    )
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
