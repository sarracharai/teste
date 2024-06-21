import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Publication } from '../model/publication.model';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {
  publication: string = ''; // Propriété pour stocker le message

  constructor(
    private personnelService: PersonnelService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // Fonction pour ajouter un message
  addPublication(): void {
    // Créez un nouvel objet Date pour obtenir la date et l'heure actuelles
    const currentDate = new Date();
    
    // Créez un nouvel objet Messagerie
    const newPublication: Publication = {
      idPublication: 0, // Initialisation à une valeur par défaut (0 ou null)
      publication: this.publication,
      dateAjout: currentDate
    };

    // Appelez la méthode pour ajouter le message via le service
    this.personnelService.ajouterPublication(newPublication).subscribe(() => {
        console.log('Message ajouté avec succès!');
        this.router.navigate(['/publication']); // Rediriger vers la liste des messages après l'ajout
    }, error => {
        console.error('Erreur lors de l\'ajout du message :', error);
    });
}

}