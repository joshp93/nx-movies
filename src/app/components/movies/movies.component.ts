import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  searchForm: FormGroup;
  movies: Movie[];

  constructor(private movieService: MovieService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: new FormControl("")
    })
  }

  search() {
    this.movieService.getMovies(this.searchForm.value.search).subscribe(result => {
      this.movies = result.results;
    });
  }
}
