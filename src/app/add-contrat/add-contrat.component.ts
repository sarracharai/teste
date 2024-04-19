import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrat } from '../model/contrat.model';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
  newContrat = new Contrat();
  
  constructor(private personnelService: PersonnelService,
    private router : Router) {}

   

    validateContrat(): boolean {
      console.log('Date d\'embauche:', this.newContrat.dateEmbauche);
      console.log('Date de signature:', this.newContrat.dateSignature);
  
      
        const dateEmbauche = new Date(this.newContrat.dateEmbauche);
        const dateSignature = new Date(this.newContrat.dateSignature);
      
        if (dateEmbauche < dateSignature) {
          console.log("La date d'embauche ne peut pas être antérieure à la date de signature.");
          return false; // Empêche la soumission du formulaire
        }
      
        return true; // Permet la soumission du formulaire
      }
    

addContrat(){
  console.log('Formulaire soumis !');
// Vérifier si tous les champs requis sont remplis
  if (!this.newContrat.type || !this.newContrat.dateEmbauche || !this.newContrat.dateSignature || !this.newContrat.nomSociete) {
    alert('Veuillez remplir tous les champs.');
  return; // Ne soumettez pas le formulaire si un champ est vide
}
if (this.validateContrat()) {
  this.personnelService.ajouterContrat(this.newContrat).subscribe(() => {
  this.router.navigate(['contrats']);
    });
    console.log("Contrat ajouté avec succès !");
  } else {
    // Si la validation échoue, n'ajoutez pas le contrat
    alert("Impossible d'ajouter le contrat. Veuillez corriger les dates.");
  }
 }

ngOnInit(): void {
 }
}