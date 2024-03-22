import { PersonnelService } from './../services/personnel.service';
import { Component, OnInit } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { Departement } from '../model/departement.model';

@Component({
  selector: 'app-recherche-par-departement',
  templateUrl: './recherche-par-departement.component.html',
  styleUrls: ['./recherche-par-departement.component.css']
})
export class RechercheParDepartementComponent implements OnInit{

  personnels! : Personnel[];
  IdDepartement! : number;
  departements! : Departement[];

  allPersonnels! : Personnel[];
  searchTerm!: string;
  
constructor(private personnelService: PersonnelService){}

 onKeyUp(filterText : string){ ////onkeyup
   this.personnels = this.allPersonnels.filter(item => 
    item.nomPersonnel.toLowerCase().includes(filterText));
  }

onChange() { 
  this.personnelService.rechercherParDepartement(this.IdDepartement).
   subscribe(persons =>{this.personnels=persons}); }

  ngOnInit(): void {

    this.personnelService.listeDepartements(). 
    subscribe(cats => {this.departements = cats._embedded.departements;
       console.log(cats); });
    
  //   this.personnelService.listeDepartements().
  //    subscribe(deps => {this.departements = deps._embedded.departements;
  //      console.log(deps);
  //      });
  
 }
 
}
