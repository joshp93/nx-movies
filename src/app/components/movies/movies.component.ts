import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/models/movie.model';
import { TMDBService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  searchForm: FormGroup;
  movies: Movie[];

  constructor(private tmdbService: TMDBService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: new FormControl("")
    })
  }

  search() {
    if (this.searchForm.value.search) {
      this.tmdbService.getMovies(this.searchForm.value.search).subscribe(result => {
        this.movies = new Array<Movie>();
        result.results.map((movie) => {
          this.movies.push(new Movie(movie));
        });
      });
    }
  }
}
