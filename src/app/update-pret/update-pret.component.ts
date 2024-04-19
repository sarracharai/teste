import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';
import { Pret } from '../model/pret.model';

@Component({
  selector: 'app-update-pret',
  templateUrl: './update-pret.component.html',
  styleUrls: ['./update-pret.component.css']
})
export class UpdatePretComponent implements OnInit{

  currentPret = new Pret();
  updatedPretId! : number;

  constructor(private activatedRoute: ActivatedRoute, 
              private router :Router,
              private personnelService : PersonnelService){}


  updatePret() {

    // Vérifier si tous les champs requis sont remplis
    if (!this.currentPret.statutPret || !this.currentPret.montant) {
      alert('Veuillez remplir tous les champs.');
    return; // Ne soumettez pas le formulaire si un champ est vide
  }

    this.personnelService.updatePret(this.currentPret).subscribe(p => {
      this.router.navigate(['/listePret', this.currentPret.idPret]);
        });
  }

  ngOnInit(): void {
    this.personnelService.consulterPret(this.activatedRoute.snapshot.params['idPret']).
    subscribe(p =>{this.currentPret =p});
  }

}
