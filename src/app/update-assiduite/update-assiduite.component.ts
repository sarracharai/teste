
import { Component } from '@angular/core';
import { Assiduite } from '../model/assiduite.model';
import { Absence } from '../model/absence.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';


@Component({
  selector: 'app-update-assiduite',
  templateUrl: './update-assiduite.component.html',
  styleUrls: ['./update-assiduite.component.css']
  
})
export class UpdateAssiduiteComponent {
  currentAssiduite = new Assiduite();
  absences! : Absence[];
  updatedAbId! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private personnelService: PersonnelService) { }

    ngOnInit(): void {
      this.personnelService.listeAbsences().
      subscribe(abs => {this.absences = abs;
      console.log(abs);
      });
      this.personnelService.consulterAssiduite(this.activatedRoute.snapshot.params['id']).
      subscribe( as =>{ this.currentAssiduite = as;
      this.updatedAbId =this.currentAssiduite.absence.idAbs;
      } ) ;
      }
   //   
  updateAssiduite(){
    // Vérifier si tous les champs requis sont remplis
    if (this.currentAssiduite.nbHeures === null || this.currentAssiduite.heuresSupp === null) {
      alert('Veuillez remplir tous les champs.');
    return; // Ne soumettez pas le formulaire si un champ est vide
  }
      this.currentAssiduite.absence=this.absences?.find(ab=>ab.idAbs==this.updatedAbId)!;
      this.personnelService.updateAssiduite(this.currentAssiduite).subscribe(as => {
      this.router.navigate(['assiduites']);
      }); 
    }
  
  
}
