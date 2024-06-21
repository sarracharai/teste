import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-profil-administrateur',
  templateUrl: './profil-administrateur.component.html',
  styleUrls: ['./profil-administrateur.component.css']
})
export class ProfilAdministrateurComponent implements OnInit {

  admin: any;

  constructor( private personnelService: PersonnelService,
    private router: Router, // Injects Router for navigation
    private route: ActivatedRoute
    
  ){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idAdmin = +params['idAdmin']; // Utiliser 'id' comme paramètre
      this.personnelService.getAdminById(idAdmin).subscribe(
        admin => {
          this.admin = admin;
        },
        error => {
          console.error('Error fetching admin by id:', error);
        }
      );
    });
  
  }

  navigateToProfileEdit(idAdmin: number) {
    this.router.navigate(['/updateAdmin' , idAdmin]);
  }


 

}
