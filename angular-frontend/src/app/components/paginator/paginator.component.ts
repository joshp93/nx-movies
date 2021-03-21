import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() totalResults: number;
  @Input() totalPages: number
  @Input() page: number;
  @Output() onChangePage = new EventEmitter<{
    value: number,
    searchBack: boolean
  }>();

  constructor() { }

  ngOnInit(): void {
  }

  first() {
    if (this.page != 1) this.onChangePage.emit({
      value: 1,
      searchBack: true
    });
  }
  last() {
    if (this.page != this.totalPages) this.onChangePage.emit({
      value: this.totalPages,
      searchBack: false
    });
  }
  next() {
    if (this.page != this.totalPages) this.onChangePage.emit({
      value: this.page + 1,
      searchBack: false
    });
  }
  previous() {
    if (this.page != 1) this.onChangePage.emit({
      value: this.page - 1,
      searchBack: true
    });
  }
}
