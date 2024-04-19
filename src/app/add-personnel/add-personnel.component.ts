import { Departement } from '../model/departement.model';
import { PersonnelService } from './../services/personnel.service';
import { Component, OnInit } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

const phoneNumberPattern = /^\+216\d{8}$/;

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.css']
})
export class AddPersonnelComponent implements OnInit {
departements! : Departement[];
newPersonnel = new Personnel(); 
newIdDep! : number;
newDepartement! : Departement;
formulaireValide: boolean = false;


dateOfBirthControl = new FormControl('');
phoneNumberControl = new FormControl('', [Validators.pattern(phoneNumberPattern)]); // Utilisation du pattern de validation pour le numéro de téléphone



constructor(private personnelService : PersonnelService,
            private router:Router ){}



 addPersonnel() {
 // Vérifier si l'email est valide "hnee ma ya3mel ajout ken y3ayet lel methode li nvalidiw beha mail 
 if (this.validateEmail() !== '') {
  alert('Veuillez entrer une adresse e-mail valide.');
  return; //  si l'email est invalide ne soumettez pas le formulaire
}
// Vérifier si tous les champs requis sont remplis
if (!this.newPersonnel.nomPersonnel || !this.newPersonnel.prenomPersonnel || !this.newPersonnel.dateNaissance || !this.newPersonnel.email || !this.newPersonnel.numTelephone || !this.newPersonnel.adresse || !this.newPersonnel.fonction || !this.newIdDep) {
  alert('Veuillez remplir tous les champs.');
  return; // Ne soumettez pas le formulaire si un champ est vide
}
   // Si tous les champs sont valides, soumettez le formulaire
   this.newPersonnel.departement = this.departements.find(dep => dep.idDep == this.newIdDep)!;
   this.personnelService.ajouterPersonnel(this.newPersonnel)
     .subscribe(() => { 
       this.router.navigate(['personnel']);
     });
 }

 
 validateEmail(): string {
  console.log("Validation de l'email...");
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/; 
  const emailString = String(this.newPersonnel.email);
  const isValid = pattern.test(emailString);
  console.log("Email valide ? ", isValid);
  return isValid ? '' : 'Veuillez entrer une adresse e-mail valide.';
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
  if (!this.newPersonnel.dateNaissance) {
    return 1; // date de naissance requise
  }
  // Vérifiez si la date de naissance est une date valide
  const dateNaissance = new Date(this.newPersonnel.dateNaissance);
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

isPhoneNumberValid(): boolean {
  // Si le numéro de téléphone n'est pas défini ou ne correspond pas au format attendu, considérez-le comme invalide
  return !!this.newPersonnel.numTelephone && phoneNumberPattern.test(String(this.newPersonnel.numTelephone));
}


ngOnInit(): void {
  this.personnelService.listeDepartements().
   subscribe(deps =>
    {console.log(deps);
      this.departements = deps._embedded.departements;
       
});

 }

}
