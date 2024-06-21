import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnel-assiduite-data',
  templateUrl: './personnel-assiduite-data.component.html',
  styleUrls: ['./personnel-assiduite-data.component.css']
})
export class PersonnelAssiduiteDataComponent implements OnInit {
  assiduiteData: any;
  error: boolean = false; // Définit la propriété 'error'
  

  constructor(
    private personnelService: PersonnelService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.loadToken(); // Charger le token
    const token = this.authService.getToken();

    if (token) {
      this.personnelService.getAssiduiteData().subscribe(
        (response) => {
          this.assiduiteData = response;
        },
        (error) => {
          console.error('Error fetching personnel data:', error);
        }
      );
    } else {
      console.error('No token found. Redirecting to login.');
      this.router.navigate(['/login']); // Redirection vers la page de connexion si le token est manquant
    }
  }
}



