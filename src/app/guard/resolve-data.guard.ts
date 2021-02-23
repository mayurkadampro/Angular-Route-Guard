import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveDataGuard implements Resolve<any> {

  constructor(
    private authService: AuthService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.UserSubjectValue ? this.authService.UserSubjectValue : null;
  }
}
