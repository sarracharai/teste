import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from '../model/docAdministratifs.model';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {
  newDocument = new Document();
  file: File | undefined;

  constructor(private personnelService: PersonnelService, private router: Router) {}

  ngOnInit(): void {}

  addDocument(): void {
    // Vérifiez que tous les champs nécessaires sont remplis
    if (!this.newDocument.type || !this.newDocument.dateCreation || !this.file) {
      alert('Veuillez remplir tous les champs et ajouter un fichier.');
      return;
    }

    // Formate la date au format ISO si elle est valide
    const isoDate = new Date(this.newDocument.dateCreation).toISOString().split('T')[0];  // Obtenez uniquement YYYY-MM-DD
    this.newDocument.dateCreation = isoDate;  // Mettez à jour la date dans le modèle Document

    // Appel à votre service pour ajouter le document
    this.personnelService.ajouterDocument(this.newDocument, this.file).subscribe(() => {
      this.router.navigate(['documents']);
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
}
