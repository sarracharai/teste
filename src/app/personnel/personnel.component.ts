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
    this.chargerPersonnels(); 
  }

  chargerPersonnels(){
  this.personnelService.listePersonnels().subscribe(persons => {
    console.log(persons);
    this.personnels = persons;
    this.allPersonnels = persons; // Important
  });

  }

  voirDetails(id: number): void {
    this.router.navigate(['/profil', id]);
    }

  supprimerPersonnel(p: Personnel) { 
    let conf = confirm("Etes-vous sûr ?");
    if (conf) this.personnelService.supprimerPersonnel(p.id).subscribe(() => {
      console.log("personnel supprimé"); this.chargerPersonnels(); }); 
    }


  modifierPersonnel(idPersonnel: number) {
      this.router.navigate(['/updatePersonnel', idPersonnel]);
    }

    onKeyUp(filterText : string){ ////onkeyup
      this.personnels = this.allPersonnels.filter(item => 
       item.nom.toLowerCase().includes(filterText));
      }
    
  

}
