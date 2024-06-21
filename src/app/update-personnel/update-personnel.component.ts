import { Departement } from '../model/departement.model';
import { Component, OnInit } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-personnel',
  templateUrl: './update-personnel.component.html',
  styleUrls: ['./update-personnel.component.css']
})
export class UpdatePersonnelComponent implements OnInit{

  currentPersonnel = new Personnel();

  departements! : Departement[];
  updatedDepId! : number;

  dateOfBirthControl = new FormControl('');
  
constructor(private activatedRoute: ActivatedRoute, 
            private router :Router,
            private personnelService : PersonnelService){}


updatePersonnel() {
  // Vérifier si l'email est valide "hnee ma ya3mel ajout ken y3ayet lel methode li nvalidiw beha mail 
 if (this.validateEmail() !== '') {
  alert('Veuillez entrer une adresse e-mail valide.');
  return; //  si l'email est invalide ne soumettez pas le formulaire
}
// Vérifier si tous les champs requis sont remplis
if (!this.currentPersonnel.nom || !this.currentPersonnel.prenom || !this.currentPersonnel.dateNaissance || !this.currentPersonnel.email || !this.currentPersonnel.numTelephone || !this.currentPersonnel.adresse || !this.currentPersonnel.fonction || !this.updatedDepId) {
  alert('Veuillez remplir tous les champs.');
  return; // Ne soumettez pas le formulaire si un champ est vide
}

this.currentPersonnel.departement = this.departements?.find(dep => dep.idDep == this.updatedDepId)!; 
 this.personnelService.updatePersonnel(this.currentPersonnel).subscribe(person => {
 this.router.navigate(['/profil', this.currentPersonnel.id]);
   });
}



validateEmail(): string {
  console.log("Validation de l'email...");
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/; 
  const emailString = String(this.currentPersonnel.email);
  const isValid = pattern.test(emailString);
  console.log("Email valide ? ", isValid);
  return isValid ? '' : 'Veuillez entrer une adresse e-mail valide.';
}

isValidPhoneNumber(phoneNumber: string): boolean {
  const phoneRegex = /\+216\d{8}/;
  return phoneRegex.test(phoneNumber);
}


getCurrentDate(): Date { // sadak hedhi methode bech ne5dhou beha date jedida 
  return new Date();
}


isDateOfBirthValid(): boolean {// pour valider si la date de naissance est valide ou non 
  return this.getDateOfBirthError() === 0; // Retourne true si aucune erreur n'est détectée
}

// Méthode pour valider la date de naissance et renvoyer un code d'erreur
// 0 : valide, 1 : date de naissance dans le futur, 2 : moins de 18 ans
getDateOfBirthError(): number {
  // Vérifiez si la date de naissance est définie et non nulle
  if (!this.currentPersonnel.dateNaissance) {
    return 1; // date de naissance requise
  }
  // Vérifiez si la date de naissance est une date valide
  const dateNaissance = new Date(this.currentPersonnel.dateNaissance);
  if (isNaN(dateNaissance.getTime())) {
    return 1; // date de naissance invalide
  }
  // Vérifiez si la date de naissance est dans le futur
  const currentDate = new Date();
  if (dateNaissance > currentDate) {
    return 1; // date de naissance dans le futur
  }
  // Vérifiez si le personnel a moins de 18 ans
  const minDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
  if (dateNaissance > minDate) {
    return 3; // moins de 18 ans
  }
  // Date de naissance valide
  return 0;
}




ngOnInit(): void { 
  this.personnelService.listeDepartements().
  subscribe(deps => {console.log(deps);
        this.departements = deps._embedded.departements;
    });

   this.personnelService.consulterPersonnel(this.activatedRoute.snapshot.params['idPersonnel']).
    subscribe( person =>{ this.currentPersonnel = person;
       this.updatedDepId = this.currentPersonnel.departement.idDep;
       } ) ;
       }

  
    


}

