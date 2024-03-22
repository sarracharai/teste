import { Departement } from '../model/departement.model';
import { PersonnelService } from './../services/personnel.service';
import { Component, OnInit } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.css']
})
export class AddPersonnelComponent implements OnInit {
departements! : Departement[];
newPersonnel = new Personnel(); 
newIdDep! : number;
newDepartement! : Departement;
formulaireValide: boolean = false;
constructor(private personnelService : PersonnelService,
            private router:Router ){}


 addPersonnel() {
//   //const selectedDepartement = this.departements?.find(dep => dep.idDep === this.newIdDep);
   this.newPersonnel.departement = this.departements.find(dep => dep.idDep == this.newIdDep)!;
   this.personnelService.ajouterPersonnel(this.newPersonnel)
     .subscribe(() => { 
      this.router.navigate(['personnel']);
     });
 }

 


  ngOnInit(): void {
     this.personnelService.listeDepartements().
      subscribe(deps =>
       {console.log(deps);
         this.departements = deps._embedded.departements;
          
  });

 
  

    }

}
