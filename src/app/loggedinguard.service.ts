import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './membership/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Loggedinguard implements CanActivate {

  constructor(private authSer:AuthService) { }

  canActivate(): boolean {
    return this.authSer.isLoggedIn();
  }

}
