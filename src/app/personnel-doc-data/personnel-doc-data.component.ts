import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnel-doc-data',
  templateUrl: './personnel-doc-data.component.html',
  styleUrls: ['./personnel-doc-data.component.css']
})
export class PersonnelDocDataComponent  implements OnInit{

  docData: any;
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
      this.personnelService.getdocData().subscribe(
        (response) => {
          this.docData = response;
        },
        (error) => {
          console.error('Error fetching document data:', error);
        }
      );
    } else {
      console.error('No token found. Redirecting to login.');
      this.router.navigate(['/login']); // Redirection vers la page de connexion si le token est manquant
    }
  }
  
  }


