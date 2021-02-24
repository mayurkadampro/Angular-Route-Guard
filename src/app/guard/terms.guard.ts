import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TermsComponent } from '../components/terms/terms.component';

@Injectable({
  providedIn: 'root'
})
export class TermsGuard implements CanDeactivate<TermsComponent> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(window.confirm("Hope you read all terms carefully...")){
      return true
    }
    return false;
  }
  
}
