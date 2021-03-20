import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() valueEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  search(value: string) {
    if (value) this.valueEvent.emit(value);
  }
}
