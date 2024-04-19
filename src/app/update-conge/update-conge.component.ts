import { Component, OnInit } from '@angular/core';
import { Conge } from '../model/conge.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-update-conge',
  templateUrl: './update-conge.component.html',
  styleUrls: ['./update-conge.component.css']
})
export class UpdateCongeComponent implements OnInit {

  currentConge = new Conge();

  constructor(private activatedRoute: ActivatedRoute, 
              private router :Router,
              private personnelService : PersonnelService) {}

  updateConge() {

    // Vérifier si tous les champs requis sont remplis
    if (!this.currentConge.typeConge|| !this.currentConge.justifConge ) {
      alert('Veuillez remplir tous les champs.');
    return; // Ne soumettez pas le formulaire si un champ est vide
  }

    this.personnelService.updateConge(this.currentConge).subscribe(p => {
      this.router.navigate(['/listeConge', this.currentConge.idConge]);
    });
  }

  ngOnInit(): void {
    this.personnelService.consulterConge(this.activatedRoute.snapshot.params['idConge']).subscribe(cong => {
      this.currentConge = cong;
    });
  }
}
