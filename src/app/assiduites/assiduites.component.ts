import { Component,OnInit } from '@angular/core';
import { Assiduite } from '../model/assiduite.model';
import { Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-assiduites',
  templateUrl: './assiduites.component.html',
  
})
export class AssiduitesComponent implements OnInit {
  assiduites? : Assiduite[] ;
  constructor( private personnelService: PersonnelService ,private router: Router , public authService: AuthService, ) {
  
      }
 
   ngOnInit(): void {
 
    this.chargerAssiduites();
   }
  
   chargerAssiduites(){
     this.personnelService.listeAssiduite().subscribe(ass=> {
       console.log(ass);
       this.assiduites = ass;
       });
   }


   supprimerAssiduite(a: Assiduite)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.personnelService.supprimerAssiduite(a.idAssiduite).subscribe(() => {
        console.log("produit supprimé");
        this.chargerAssiduites();     
      
});
}
  }
  
  
 