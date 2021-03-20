import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISetupData } from 'src/app/models/isetup-data';

@Component({
  selector: 'app-setup-dialog',
  templateUrl: './setup-dialog.component.html',
  styleUrls: ['./setup-dialog.component.scss']
})
export class SetupDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SetupDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ISetupData) { }

  ngOnInit(): void {
  }

  update() {
    if (this.data.api_key) {
      this.dialogRef.close(this.data.api_key);
    }
  }
  cancel() {
    this.dialogRef.close("")
  }
}
