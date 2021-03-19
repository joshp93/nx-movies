import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TV } from 'src/app/models/tv.model';
import { TMDBService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  searchForm: FormGroup;
  tvShows: TV[];

  constructor(private tmdbService: TMDBService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: new FormControl("")
    })
  }

  search() {
    if (this.searchForm.value.search) {
      this.tmdbService.getTVShows(this.searchForm.value.search).subscribe(result => {
        this.tvShows = new Array<TV>();
        result.results.map((tv) => {
          this.tvShows.push(new TV(tv));
        });
      });
    }
  }
}
