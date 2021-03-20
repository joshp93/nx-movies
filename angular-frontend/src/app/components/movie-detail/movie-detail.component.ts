import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieDetail } from 'src/app/models/movie-detail.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Output() closeEvent = new EventEmitter();
  @Input() movieDetail: MovieDetail;
  // @Input() tvDetail:

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeEvent.emit();
  }

}
