import { Component, OnInit } from '@angular/core';
import { Absence } from '../model/absence.model';
import { Assiduite } from '../model/assiduite.model';
import { PersonnelService } from '../services/personnel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-absence',
  templateUrl: './add-absence.component.html',
  styleUrls: ['./add-absence.component.css']
})
export class AddAbsenceComponent implements OnInit {
  newAbsence = new Absence();
  assiduites!: Assiduite[] ;
  newIdAssiduite! : number;
  newAssiduite! : Assiduite;
  constructor(private personnelService: PersonnelService,
    private router : Router) {}

    ngOnInit(): void {
      this.personnelService.listeAssiduite().
      subscribe(abs => {console.log(abs);
      this.assiduites = abs;
      }
      );
      }


    addAbsence(){
      // Vérifier si tous les champs requis sont remplis
    if (!this.newAbsence.typeAbs || !this.newAbsence.statut ) {
      alert('Veuillez remplir tous les champs.');
    return; // Ne soumettez pas le formulaire si un champ est vide
  }
      this.newAbsence.assiduite = this.assiduites.find(ab => ab.idAssiduite == this.newIdAssiduite)!;
            this.personnelService.ajouterAbsence(this.newAbsence).subscribe(() => {
            this.router.navigate(['/listeAbsences']);
              });
              }
}