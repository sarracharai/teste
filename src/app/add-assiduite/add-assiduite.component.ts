
import { Component, OnInit } from '@angular/core';
import { Assiduite } from '../model/assiduite.model';
import { Absence } from '../model/absence.model';

import { Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-add-assiduite',
  templateUrl: './add-assiduite.component.html',
  
})
export class AddAssiduiteComponent implements OnInit {
  newAssiduite = new Assiduite();
  absences!: Absence[] ;
  newIdAbs! : number;
  newAbsence! : Absence;
  constructor(private personnelService: PersonnelService,
    private router : Router) {}

    ngOnInit(): void {
      this.personnelService.listeAbsences().
      subscribe(abs => {console.log(abs);
      this.absences = abs;
      }
      );
      }


    addAssiduite(){
      this.newAssiduite.absence = this.absences.find(ab => ab.idAbs == this.newIdAbs)!;
            this.personnelService.ajouterAssiduite(this.newAssiduite).subscribe(() => {
            this.router.navigate(['/assiduites']);
              });
              }
}
