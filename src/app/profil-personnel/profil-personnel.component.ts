
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';


@Component({
  selector: 'app-profil-personnel',
  templateUrl: './profil-personnel.component.html',
  styleUrls: ['./profil-personnel.component.css']
})
export class ProfilPersonnelComponent implements OnInit {

  
personnel:any;
personnels: any;

constructor( private route: ActivatedRoute,
  private personnelService: PersonnelService){}
ngOnInit(): void {

  this.route.params.subscribe(params => {
    const idPersonnel = +params['idPersonnel']; // Convertir le paramètre en nombre
    this.personnelService.getPersonnelById(idPersonnel).subscribe(personnel => {
      this.personnel = personnel;
    });
  });
}

  


}
