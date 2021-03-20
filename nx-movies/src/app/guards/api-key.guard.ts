import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SetupService } from '../services/setup.service';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyGuard implements CanActivate {

  constructor(private setupService: SetupService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    return new Promise<boolean>((resolve, reject) => {
      if (localStorage.getItem("api_key")) {
        resolve(true);
      } else {
        this.setupService.showSetupDialog()
          .then((value) => {
            resolve(value);
          })
          .catch((reason) => {
            console.error(reason);
            reject(false);
          });
      }
    });

  }
}
