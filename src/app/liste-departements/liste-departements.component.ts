import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { Departement } from '../model/departement.model';

@Component({
  selector: 'app-liste-departements',
  templateUrl: './liste-departements.component.html',
  styleUrls: ['./liste-departements.component.css']
})
export class ListeDepartementsComponent implements OnInit{

  departements! : Departement[];

  allDepartements! : Departement[];
  searchTerm!: string;

  constructor(private personnelService : PersonnelService){}



  onKeyUp(filterText : string){ ////onkeyup
    this.departements = this.allDepartements.filter(item => 
     item.nomDep.toLowerCase().includes(filterText));
    }

  ngOnInit(): void {
    this.personnelService.listeDepartements().
     subscribe(deps => {
      this.departements = deps._embedded.departements;
       console.log(deps); });
    
  }

}
