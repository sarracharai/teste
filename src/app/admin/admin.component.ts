import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] 
})
export class AdminComponent implements OnInit {
  
  adminData: any; // Holds the administrative data fetched from the service
  error: boolean = false; // Indicates if there was an error fetching data
  
  constructor(
    private personnelService: PersonnelService, // Injects PersonnelService for data retrieval
    public authService: AuthService, // Injects AuthService for authentication and token management
    private router: Router // Injects Router for navigation
  ) {}

  ngOnInit(): void {
    this.authService.loadToken(); // Charger le token
    const token = this.authService.getToken();

    if (token) {
      this.personnelService.getAdminData().subscribe(
        (response) => {
          this.adminData = response;
        },
        (error) => {
          console.error('Error fetching admin data:', error);
        }
      );
    } else {
      console.error('No token found. Redirecting to login.');
      this.router.navigate(['/login']); // Redirection vers la page de connexion si le token est manquant
    }
  }
  
  navigateToProfileEdit() {
    this.router.navigate(['/editProfilAdmin'], { state: { adminData: this.adminData }});
  }
}