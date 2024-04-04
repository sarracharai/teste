import { Component, OnInit } from '@angular/core';
import { Departement } from '../model/departement.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {


  currentDep = new Departement();

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private personnelService: PersonnelService) { }

  updateDepartement() {
    this.personnelService.updateDepartement(this.currentDep).subscribe(dep => {
      this.router.navigate(['/listeDep']);
      }); 
  }
   

  ngOnInit(): void {

    this.personnelService.consulterDepartement(this.activatedRoute.snapshot.params['idDep']).
    subscribe( dep =>{ this.currentDep = dep;

    } ) ;
  
   
  }

}
