import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() id: number;
  @Input() backdrop_path: string;
  @Input() title: string;
  @Input() overview: string;

  constructor() { }

  ngOnInit(): void {
  }
}
