import { Component, OnInit } from '@angular/core';
import { TVDetail } from 'src/app/models/tv-detail.model';
import { TV } from 'src/app/models/tv.model';
import { TMDBService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TVShowsComponent implements OnInit {
  tvShows: TV[];
  showDetail: boolean;
  tvDetail: TVDetail;
  page: number;
  totalPages: number;
  totalResults: number;
  searchValue: string;

  constructor(private tmdbService: TMDBService) { }

  ngOnInit(): void {
  }

  search(value: string, page: number) {
    this.tmdbService.getTVShows(value, page).subscribe(result => {
      this.tvShows = new Array<TV>();
      result.results.map((tv) => {
        this.tvShows.push(new TV(tv));
      });
      this.page = result.page;
      this.totalPages = result.total_pages;
      this.totalResults = result.total_results;
    });
    this.searchValue = value;
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
