import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  

  constructor (public authService: AuthService,
    private router:Router) {}

  ngOnInit () { 
    this.authService.loadToken();
     if (this.authService.getToken()==null || this.authService.isTokenExpired()) this.router.navigate(['/login']); 
    }

  onLogout(){
    this.authService.logout();
  }
  

}
