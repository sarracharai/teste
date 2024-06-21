
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';
import { Personnel } from '../model/personnel.model';


@Component({
  selector: 'app-profil-personnel',
  templateUrl: './profil-personnel.component.html',
  styleUrls: ['./profil-personnel.component.css']
})
export class ProfilPersonnelComponent implements OnInit {

  
personnel:any;
personnels: any;

constructor( private route: ActivatedRoute,  private router : Router,
  private personnelService: PersonnelService){}

  modifierPersonnel(idPersonnel: number) {
    this.router.navigate(['/updatePersonnel', idPersonnel]);
  }

  supprimerPersonnel(p: Personnel) { 
    let conf = confirm("Etes-vous sûr ?");
    if (conf) this.personnelService.supprimerPersonnel(p.id).subscribe(() => {
      console.log("personnel supprimé"); 
      this.router.navigate(['/users']);
    }); 
     
    }
ngOnInit(): void {

  this.route.params.subscribe(params => {
    const idPersonnel = +params['idPersonnel']; // Convertir le paramètre en nombre
    this.personnelService.getPersonnelById(idPersonnel).subscribe(personnel => {
      this.personnel = personnel;
    });
  });
}

  


}
