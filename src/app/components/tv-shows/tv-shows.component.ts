import { Component, OnInit } from '@angular/core';
import { TV } from 'src/app/models/tv.model';
import { TMDBService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  tvShows: TV[];

  constructor(private tmdbService: TMDBService) { }

  ngOnInit(): void {
  }

  search(value: string) {
    this.tmdbService.getTVShows(value).subscribe(result => {
      this.tvShows = new Array<TV>();
      result.results.map((tv) => {
        this.tvShows.push(new TV(tv));
      });
    });
  }
}
