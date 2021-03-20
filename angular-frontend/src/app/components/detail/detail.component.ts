import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieDetail } from 'src/app/models/movie-detail.model';
import { TVDetail } from 'src/app/models/tv-detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Output() closeEvent = new EventEmitter();
  @Input() movieDetail: MovieDetail;
  @Input() tvDetail: TVDetail;

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeEvent.emit();
  }

}
