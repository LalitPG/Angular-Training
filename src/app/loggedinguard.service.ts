import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './membership/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class Loggedinguard implements CanActivate {

//   constructor(private authSer:AuthService) { }

//   canActivate(): boolean {
//     return this.authSer.isLoggedIn();
//   }

// }

export const Loggedinguard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) return true;

  router.navigate(['/login']);
  return false;
};
