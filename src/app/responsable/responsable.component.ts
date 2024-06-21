import { Component } from '@angular/core';
import { Responsable } from '../model/responsable.model';
import { PersonnelService } from '../services/personnel.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent {

  responsableData: any;
  error: boolean = false; // Définit la propriété 'error'
  
  constructor( private personnelService: PersonnelService,
    public authService: AuthService,
    private router: Router){}

  ngOnInit(): void {

    this.authService.loadToken(); // Charger le token
    const token = this.authService.getToken();

    if (token) {
      this.personnelService.getResponsableData().subscribe(
        (response) => {
          this.responsableData = response;
        },
        (error) => {
          console.error('Error fetching responsable data:', error);
        }
      );
    } else {
      console.error('No token found. Redirecting to login.');
      this.router.navigate(['/login']); // Redirection vers la page de connexion si le token est manquant
    }
  }

 

  navigateToProfileEdit() {
    this.router.navigate(['/editProfilResp'], { state: { responsableData: this.responsableData }});
  }

  
}
   
  

