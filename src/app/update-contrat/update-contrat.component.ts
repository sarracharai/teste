import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contrat } from '../model/contrat.model';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrls: ['./update-contrat.component.css']
})
export class UpdateContratComponent implements OnInit {
  currentContrat = new Contrat();
  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private personnelService: PersonnelService) { }

    ngOnInit(): void {
      
      
      this.personnelService.consulterContrat(this.activatedRoute.snapshot.params['id']).
      subscribe( doc =>{ this.currentContrat = doc;
      
      } ) ;
      }
   //   
  updateContrat(){
      
      this.personnelService.updateContrat(this.currentContrat).subscribe(doc => {
      this.router.navigate(['/contrats']);
      }); 
    }
  
  
}