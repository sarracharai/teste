
import { PersonnelService } from './../services/personnel.service';

import {Component } from '@angular/core';
import { Absence } from '../model/absence.model';
import { Assiduite } from '../model/assiduite.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-absence',
  templateUrl: './update-absence.component.html',
  styleUrls: ['./update-absence.component.css']
})
export class UpdateAbsenceComponent  {

  currentAbsence = new Absence();
 assiduites! : Assiduite[];
  updatedAsId! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private personnelService: PersonnelService) { }

    ngOnInit(): void {
      this.personnelService.listeAssiduite().
      subscribe(abs => {this.assiduites = abs;
      console.log(abs);
      });
      this.personnelService.consulterAbsence(this.activatedRoute.snapshot.params['id']).
      subscribe( as =>{ this.currentAbsence = as;
      this.updatedAsId =this.currentAbsence.assiduite.idAssiduite;
      } ) ;
      }
   //   

   
  updateAbsence(){
      this.currentAbsence.assiduite=this.assiduites?.find(ab=>ab.idAssiduite==this.updatedAsId)!;
      this.personnelService.updateAbsence(this.currentAbsence).subscribe(as => {
      this.router.navigate(['/listeAbsences']);
      }); 
    }
    
}
