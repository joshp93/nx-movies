import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SetupDialogComponent } from '../components/setup-dialog/setup-dialog.component';
import { ISetupData } from '../models/isetup-data';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(private dialog: MatDialog) {
    
  }

  showSetupDialog(): Promise<boolean> {
    
    return new Promise<boolean>((resolve, reject) => {
      let dialogRef = this.dialog.open(SetupDialogComponent, {
        width: '70%',
        data: <ISetupData>{
          api_key: localStorage.getItem("api_key")
        }
      });
  
      dialogRef.afterClosed().subscribe(
        (result) => {
          if (result) {
            localStorage.setItem("api_key", result);
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (error) => {
          console.error(error);
          reject(false);
        });
    });

  }
}
