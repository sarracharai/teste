import { Component, OnInit } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  nomPersonnel! : string;
  personnels! : Personnel[];
  personnel: any;

  allPersonnels! : Personnel[];
  searchTerm!: string;

constructor(private personnelService:PersonnelService){}

  // rechercherPersons(){ 
  //   this.personnelService.rechercherParNom(this.nomPersonnel).
  //    subscribe(persons => {
  //      this.personnels = persons;
  //       console.log(persons)});
  //      }

  onKeyUp(filterText : string){ ////onkeyup
     this.personnels = this.allPersonnels.filter(item => 
      item.nomPersonnel.toLowerCase().includes(filterText));
     }

  ngOnInit(): void {

    this.personnelService.listePersonnels().subscribe(persons =>
       { console.log(persons);
         this.allPersonnels = persons;
       });
    
  }

}
