import { Component, OnInit } from '@angular/core';
import { Pret } from '../model/pret.model';
import { Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-add-pret',
  templateUrl: './add-pret.component.html',
  styleUrls: ['./add-pret.component.css']
})
export class AddPretComponent implements OnInit {

newPret = new Pret ;

constructor(private personnelService : PersonnelService,
            private router:Router){}

addPret(){
this.personnelService.ajouterPret(this.newPret)
.subscribe(ps => { console.log(ps);
this.router.navigate(['listePret']);
});

}
  ngOnInit(): void {
   
  }

}
