import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthorizationService
) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean 
    | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.authenticationService.currentUserValue;
      if (currentUser) {
          if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
              this.router.navigate(['/bankomati']);
              return false;
          }
          return true;
      }
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
  
}
