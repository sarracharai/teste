import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { Departement } from '../model/departement.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-departements',
  templateUrl: './liste-departements.component.html',
  styleUrls: ['./liste-departements.component.css']
})
export class ListeDepartementsComponent implements OnInit{

  departements! : Departement[];

  allDepartements! : Departement[];
  searchTerm!: string;

  constructor(private personnelService : PersonnelService,
             private router : Router){}


  chargerDepartements(){
    this.personnelService.listeDepartements().subscribe(deps => {
      console.log(deps);
      this.departements = deps._embedded.departements;
              });
            }

  supprimerDepartement(dep: Departement) { 
    let conf = confirm("Etes-vous sûr ?");
    if (conf) this.personnelService.supprimerDepartement(dep.idDep).subscribe(() => {
      console.log("departement supprimé"); this.chargerDepartements(); }); 
    }


  modifierDepartement(idDep: number) {
      this.router.navigate(['/updateDepartement', idDep]);
    }


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
