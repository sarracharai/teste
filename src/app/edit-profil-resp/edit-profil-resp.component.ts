import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-profil-resp',
  templateUrl: './edit-profil-resp.component.html',
  styleUrls: ['./edit-profil-resp.component.css']
})
export class EditProfilRespComponent implements OnInit{
  
  responsableData: any;
  error: boolean = false;
  
  dateOfBirthControl = new FormControl('');

  constructor(private router: Router, 
    private personnelService: PersonnelService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.responsableData = navigation.extras.state['responsableData'];
    }
  }

  onCancel() {
    this.router.navigate(['/responsable']);
  }

  onSubmit() {
    // Vérifier si l'email est valide "hnee ma ya3mel ajout ken y3ayet lel methode li nvalidiw beha mail 
 if (this.validateEmail() !== '') {
  alert('Veuillez entrer une adresse e-mail valide.');
  return; //  si l'email est invalide ne soumettez pas le formulaire
}
// Vérifier si tous les champs requis sont remplis
if (!this.responsableData.nom || !this.responsableData.prenom || !this.responsableData.dateNaissance || !this.responsableData.email || !this.responsableData.numTelephone || !this.responsableData.adresse ) {
  alert('Veuillez remplir tous les champs.');
  return; // Ne soumettez pas le formulaire si un champ est vide
}

    this.personnelService.updateResponsable(this.responsableData).subscribe(
      (resp) => {
        alert('Profil mis à jour avec succès !');
        this.router.navigate(['/responsable']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du profil : ', error);
      }
    );
  
  }

  validateEmail(): string {
    console.log("Validation de l'email...");
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/; 
    const emailString = String(this.responsableData.email);
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
    if (!this.responsableData.dateNaissance) {
      return 1; // date de naissance requise
    }
    // Vérifiez si la date de naissance est une date valide
    const dateNaissance = new Date(this.responsableData.dateNaissance);
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
    this.personnelService.getResponsableData().subscribe(
      (data) => {
        this.responsableData = data;
        if (this.responsableData?.dateNaissance) {
          // Convertir la date de naissance au format ISO pour le champ de date
          this.responsableData.dateNaissance = new Date(this.responsableData.dateNaissance).toISOString().split('T')[0];
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des données : ', error);
        this.error = true;
      }
    );
  }
  
   
   
  }

