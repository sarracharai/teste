import { Component, OnInit } from '@angular/core';
import { Departement } from '../model/departement.model';
import { Personnel } from '../model/personnel.model';
import { FormControl, Validators } from '@angular/forms';
import { PersonnelService } from '../services/personnel.service';
import { Router } from '@angular/router';

const phoneNumberPattern = /^\+216\d{8}$/;
const cinPattern = /^[0-9]{8}$/;

@Component({
  selector: 'app-new-profil',
  templateUrl: './new-profil.component.html',
  styleUrls: ['./new-profil.component.css']
})
export class NewProfilComponent implements OnInit {
  departements: Departement[] = [];
  newPersonnel = new Personnel();
  newIdDep: number = 0;
  formulaireValide: boolean = false;
  personnels: Personnel[] = [];
  personnel: any;

  dateOfBirthControl = new FormControl('');
  phoneNumberControl = new FormControl('', [Validators.pattern(phoneNumberPattern)]);
  numCinControl = new FormControl('', [Validators.pattern(cinPattern)]);

  constructor(private personnelService: PersonnelService, private router: Router) {}

  ngOnInit(): void {
    this.personnelService.listePersonnels().subscribe(personnels => {
      this.personnels = personnels;
    });

    this.personnelService.listeDepartements().subscribe(deps => {
      console.log(deps);
      this.departements = deps._embedded.departements;
    });
  }

  addPersonnel() {
    if (!this.isNumCinValid()) {
      alert(this.getNumCinError());
      return;
    }

    if (!this.isNumCinUnique()) {
      alert('Ce numéro CIN est déjà utilisé.');
      return;
    }

    if (this.validateEmail() !== '') {
      alert('Veuillez entrer une adresse e-mail valide.');
      return;
    }

    if (!this.newPersonnel.nom || !this.newPersonnel.prenom || !this.newPersonnel.dateNaissance || !this.newPersonnel.email || !this.newPersonnel.numTelephone || !this.newPersonnel.adresse || !this.newPersonnel.fonction || !this.newIdDep) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    this.newPersonnel.departement = this.departements.find(dep => dep.idDep == this.newIdDep)!;
    this.personnelService.ajouterPersonnel(this.newPersonnel).subscribe(
      () => {
        alert('Profil ajouté avec succès.');
         this.router.navigate(['/login']); // Redirection vers la page userData après l'ajout
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du personnel :', error);
        alert('Une erreur s\'est produite lors de l\'ajout du personnel. Veuillez réessayer plus tard.');
      }
    );
  }

  isNumCinValid(): boolean {
    return !!this.newPersonnel.numCin && cinPattern.test(String(this.newPersonnel.numCin));
  }

  isNumCinUnique(): boolean {
    const cinAlreadyUsed = this.personnels.some(personnel => personnel.numCin === this.newPersonnel.numCin);
    return !cinAlreadyUsed;
  }

  getNumCinError(): string {
    if (!this.numCinControl.valid) {
      return 'Numéro CIN invalide.';
    }
    return '';
  }

  validateEmail(): string {
    console.log("Validation de l'email...");
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
    const emailString = String(this.newPersonnel.email);
    const isValid = pattern.test(emailString);
    console.log("Email valide ? ", isValid);
    return isValid ? '' : 'Veuillez entrer une adresse e-mail valide.';
  }

  getCurrentDate(): Date {
    return new Date();
  }

  isDateOfBirthValid(): boolean {
    return this.getDateOfBirthError() === 0;
  }

  getDateOfBirthError(): number {
    if (!this.newPersonnel.dateNaissance) {
      return 1; // date de naissance requise
    }

    const dateNaissance = new Date(this.newPersonnel.dateNaissance);
    if (isNaN(dateNaissance.getTime())) {
      return 1; // date de naissance invalide
    }

    const currentDate = new Date();
    if (dateNaissance > currentDate) {
      return 1; // date de naissance dans le futur
    }

    const minDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
    if (dateNaissance > minDate) {
      return 3; // moins de 18 ans
    }

    return 0;
  }

  isPhoneNumberValid(): boolean {
    return !!this.newPersonnel.numTelephone && phoneNumberPattern.test(String(this.newPersonnel.numTelephone));
  }
}
