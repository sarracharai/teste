import { Component, Input, OnInit } from '@angular/core';
import { Departement } from '../model/departement.model';
import { PersonnelService } from '../services/personnel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})

export class AddDepartementComponent implements OnInit{

  newDepartement = new Departement();

  constructor(private personnelService : PersonnelService,
              private router:Router){}

   addDepartement(){
    this.personnelService.ajouterDepartement(this.newDepartement)
     .subscribe(dep => { console.log(dep);
       this.router.navigate(['listeDep']);
       });

   }

  ngOnInit(): void {
   
  }
}
