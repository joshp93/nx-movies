import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { TMDBService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  error: any;

  constructor(private tmdbService: TMDBService) { }

  ngOnInit(): void {
  }

  search(value: string) {
    this.tmdbService.getMovies(value).subscribe(
      result => {
        this.movies = new Array<Movie>();
        result.results.map((movie) => {
          this.movies.push(new Movie(movie));
        });
      });
  }
}
