import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { Router } from '@angular/router';
import { Conge } from '../model/conge.model';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.css']
})
export class AddCongeComponent implements OnInit {

  newConge =  new Conge();

   constructor(private personnelService : PersonnelService,
     private router:Router){}

 addConge(){
  // Vérifier si tous les champs requis sont remplis
  if (!this.newConge.typeConge || !this.newConge.dateDebut || !this.newConge.dateFin || !this.newConge.justifConge || !this.newConge.dateDemande) {
    alert('Veuillez remplir tous les champs.');
  return; // Ne soumettez pas le formulaire si un champ est vide
}
 this.personnelService.ajouterConge(this.newConge)
 .subscribe(cong => { console.log(cong);
 this.router.navigate(['listeConge']);
 });

 }
  ngOnInit(): void {
    
  }

}
