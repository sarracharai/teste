
import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Personnel } from '../model/personnel.model';
import { Departement } from '../model/departement.model';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit{

  

  departements! : Departement[];
  updatedDepId! : number;
  personnelData: any;
  error: boolean = false;
  


  constructor(private router: Router, 
    private personnelService: PersonnelService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.personnelData = navigation.extras.state['personnelData'];
    }
  }

  onSubmit() {
    this.personnelData.departement = this.departements?.find(dep => dep.idDep == this.updatedDepId)!; 
    this.personnelService.updatePersonnel(this.personnelData).subscribe(
      (person) => {
        // Afficher une alerte lorsque la mise à jour est réussie
        alert('Profil mis à jour avec succès !');
        // Rediriger l'utilisateur vers la page de données utilisateur
        this.router.navigate(['/user-data']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du profil : ', error);
      }
    );
  }

    onCancel() {
      this.router.navigate(['/user-data']);
    }

  ngOnInit(): void {


    this.updatedDepId = this.personnelData.departement.idDep; // Initialisation de updatedDepId avec l'ID du département actuel
    if (this.personnelData.dateNaissance) {
      this.personnelData.dateNaissance = new Date(this.personnelData.dateNaissance).toISOString().split('T')[0];
    }

    this.personnelService.listeDepartements().
    subscribe(deps => {console.log(deps);
          this.departements = deps._embedded.departements;
      });
  }
   
  
}

