import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonnelGuard implements CanActivate { 
  constructor (private authService: AuthService,
     private router : Router) {}
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAdmin()) 
        return true;
       else { 
        this.router.navigate(['app-forbidden']);
         return false;
         } 
        }
      }