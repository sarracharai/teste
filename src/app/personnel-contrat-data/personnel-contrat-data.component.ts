import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnel-contrat-data',
  templateUrl: './personnel-contrat-data.component.html',
  styleUrls: ['./personnel-contrat-data.component.css']
})
export class PersonnelContratDataComponent implements OnInit{
  contratData: any;
  error: boolean = false; // Définit la propriété 'error'
  

  constructor(
    private personnelService: PersonnelService,
    private authService: AuthService,
    private router: Router
  ) {}

  printPage() {
    window.print();
  }

  ngOnInit(): void {
    this.authService.loadToken(); // Charger le token
    const token = this.authService.getToken();

    if (token) {
      this.personnelService.getContratData().subscribe(
        (response) => {
          this.contratData = response;
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
