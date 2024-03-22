import { Departement } from '../model/departement.model';
import { Component, OnInit } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-update-personnel',
  templateUrl: './update-personnel.component.html',
  styleUrls: ['./update-personnel.component.css']
})
export class UpdatePersonnelComponent implements OnInit{

  currentPersonnel = new Personnel();

  departements! : Departement[];
  updatedDepId! : number;
  
constructor(private activatedRoute: ActivatedRoute, 
            private router :Router,
            private personnelService : PersonnelService){}


updatePersonnel() {
this.currentPersonnel.departement = this.departements?.find(dep => dep.idDep == this.updatedDepId)!; 
 this.personnelService.updatePersonnel(this.currentPersonnel).subscribe(person => {
 this.router.navigate(['/profil', this.currentPersonnel.idPersonnel]);
   });
}



ngOnInit(): void { 
  this.personnelService.listeDepartements().
  subscribe(deps => {console.log(deps);
        this.departements = deps._embedded.departements;
    });

   this.personnelService.consulterPersonnel(this.activatedRoute.snapshot.params['idPersonnel']).
    subscribe( person =>{ this.currentPersonnel = person;
       this.updatedDepId = this.currentPersonnel.departement.idDep;
       } ) ;
       }

  
    


}
