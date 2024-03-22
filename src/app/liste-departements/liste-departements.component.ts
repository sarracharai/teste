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

  constructor(private personnelService : PersonnelService){}


  ngOnInit(): void {
    this.personnelService.listeDepartements().
     subscribe(deps => {
      this.departements = deps._embedded.departements;
       console.log(deps); });
    
  }

}
