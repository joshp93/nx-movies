import { Component, OnInit } from '@angular/core';
import { SetupService } from 'src/app/services/setup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private setupService: SetupService) { }

  ngOnInit(): void {
  }

  setup() {
    this.setupService.showSetupDialog()
      .catch((reason) => {
        console.error(reason);
      });
  }

}
