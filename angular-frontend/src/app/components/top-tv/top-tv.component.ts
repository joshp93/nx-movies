import { Component, OnInit } from '@angular/core';
import { TVDetail } from 'src/app/models/tv-detail.model';
import { TV } from 'src/app/models/tv.model';
import { TMDBService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-top-tv',
  templateUrl: './top-tv.component.html',
  styleUrls: ['./top-tv.component.scss']
})
export class TopTVComponent implements OnInit {
  tvShows: TV[];
  showDetail: boolean;
  tvDetail: TVDetail;

  constructor(private tmdbService: TMDBService) { }

  ngOnInit(): void {
    this.tmdbService.getTopTVShows().subscribe(
      (result) => {
        this.tvShows = result.results;
      }
    )
  }

  getDetails(id: number) {
    this.tmdbService.getTVDetail(id).subscribe(
      (result) => {
        this.tvDetail = result;
        this.showDetail = true;
      }
    );
  }
}
