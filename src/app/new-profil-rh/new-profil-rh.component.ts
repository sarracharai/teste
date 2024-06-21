import { Component, OnInit } from '@angular/core';
import { Responsable } from '../model/responsable.model';
import { PersonnelService } from '../services/personnel.service';
import { Router } from '@angular/router';

const phoneNumberPattern = /^\+216\d{8}$/;

@Component({
  selector: 'app-new-profil-rh',
  templateUrl: './new-profil-rh.component.html',
  styleUrls: ['./new-profil-rh.component.css']
})
export class NewProfilRhComponent implements OnInit {
  newResponsable = new Responsable();
  formulaireValide: boolean = false;
  responsables: Responsable[] = [];

  constructor(private personnelService: PersonnelService, private router: Router) {}

  ngOnInit(): void {}

  addResponsable() {
    if (this.validateEmail() !== '') {
      alert('Veuillez entrer une adresse e-mail valide.');
      return;
    }

    if (!this.newResponsable.nom || !this.newResponsable.prenom || !this.newResponsable.dateNaissance || !this.newResponsable.email || !this.newResponsable.numTelephone || !this.newResponsable.adresse || !this.newResponsable.username) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    this.personnelService.ajouterResponsable(this.newResponsable).subscribe(
      () => {
        alert('Responsable ajouté avec succès.');
        this.router.navigate(['/sidebar']); // Redirection vers la page de sidebar après l'ajout
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du responsable :', error);
        alert('Une erreur s\'est produite lors de l\'ajout du responsable. Veuillez réessayer plus tard.');
      }
    );
  }

  validateEmail(): string {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
    const emailString = String(this.newResponsable.email);
    const isValid = pattern.test(emailString);
    return isValid ? '' : 'Veuillez entrer une adresse e-mail valide.';
  }
  
  getCurrentDate(): Date {
    return new Date();
  }

  isDateOfBirthValid(): boolean {
    return true; // À remplacer par la logique de validation réelle
  }

  getDateOfBirthError(): number {
    return 0; // À remplacer par la logique de gestion des erreurs réelle
  }

  isPhoneNumberValid(): boolean {
    return !!this.newResponsable.numTelephone && phoneNumberPattern.test(String(this.newResponsable.numTelephone));
  }
}
