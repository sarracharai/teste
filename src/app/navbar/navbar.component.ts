import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(public authService : AuthService ,private router:Router){}

  onLogout(){
    this.authService.logout();
  }


  ngOnInit(): void {

    let isloggedin: string;
    let loggedUser:string;
    
     isloggedin = localStorage.getItem('isloggedIn') || '';
     loggedUser = localStorage.getItem('loggedUser') || '';
     if (isloggedin!="true" || !loggedUser)
       this.router.navigate(['/login']);
      else
       this.authService.setLoggedUserFromLocalStorage(loggedUser);
     }
    
  

}
