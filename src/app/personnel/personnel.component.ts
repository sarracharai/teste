import { PersonnelService } from './../services/personnel.service';
import { Personnel } from './../model/personnel.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  personnels! : Personnel[];
  personnel: any;
 
  allPersonnels! : Personnel[];
  searchTerm!: string;
  constructor(private personnelService : PersonnelService, public authService: AuthService , 
    private router : Router){}

  ngOnInit(): void {
    this.chargerPersonnels() ;

    this.personnelService.listePersonnels().subscribe(persons =>
      { console.log(persons);
        this.allPersonnels = persons;
      });
  }

  chargerPersonnels(){
  this.personnelService.listePersonnels().subscribe(persons => {
    console.log(persons);
    this.personnels = persons;
  });

  }

  voirDetails(idPersonnel: number): void {
    this.router.navigate(['/profil', idPersonnel]);
    }

  supprimerPersonnel(p: Personnel) { 
    let conf = confirm("Etes-vous sûr ?");
    if (conf) this.personnelService.supprimerPersonnel(p.idPersonnel).subscribe(() => {
      console.log("personnel supprimé"); this.chargerPersonnels(); }); 
    }


  modifierPersonnel(idPersonnel: number) {
      this.router.navigate(['/updatePersonnel', idPersonnel]);
    }

    onKeyUp(filterText : string){ ////onkeyup
      this.personnels = this.allPersonnels.filter(item => 
       item.nomPersonnel.toLowerCase().includes(filterText));
      }
    
    
  

}
