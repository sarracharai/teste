import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
  
})
export class LoginComponent implements OnInit{
  user = new User();
  err:number = 0;

  message : string = "login ou mot de passe erronés..";
  constructor(private authService : AuthService,
     private router: Router){}
  ngOnInit(): void {
  }
  
  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (response) => {
        this.authService.saveToken(response.headers.get('Authorization')!);
        const roles = this.authService.roles;
  
        if (roles.includes('ADMIN')) {
          this.router.navigate(['/sidebar']); // Redirection des admins
        } else if (roles.includes('RESPONSABLE')) {
          this.router.navigate(['/sidebar']); // Redirection des responsables
        } else if (roles.includes('USER')) {
          this.router.navigate(['/user-data']); // Redirection des utilisateurs
        } 
      },
      error: (err) => {
         this.err = 1;
         if (err.error.errorCause=='disabled') 
              this.message="Utilisateur désactivé, Veuillez contacter votre Administrateur";
        
      },
    });
  }
  

   
}