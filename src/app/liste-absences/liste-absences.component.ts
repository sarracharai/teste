import { Component,OnInit } from '@angular/core';
import { Absence } from '../model/absence.model';
import { PersonnelService } from '../services/personnel.service';
import { Assiduite } from '../model/assiduite.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-liste-absences',
  templateUrl: './liste-absences.component.html',

})
export class ListeAbsencesComponent implements OnInit {
  absences! : Absence[] ;
  constructor( private personnelService: PersonnelService ,private router: Router ,
                public authService: AuthService ) {
  
      }
 
   ngOnInit(): void {
 
    this.chargerAbsences();
   }
  
   chargerAbsences(){
     this.personnelService.listeAbsences().subscribe(abs=> {
       console.log(abs);
       this.absences = abs;
       });
   }


   supprimerAbsence(a: Absence)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.personnelService.supprimerAbsence(a.idAbs).subscribe(() => {
        console.log("produit supprimé");
        this.chargerAbsences();     
      
});
}
  }
  
  
 