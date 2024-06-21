import { Component, OnInit } from '@angular/core';
import { Publication } from '../model/publication.model';
import { Commentaire } from '../model/commentaire.model';
import { PersonnelService } from '../services/personnel.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  successMessage: string = '';
  publications!: Publication[];
  newComments: { [key: number]: string } = {};

  constructor(private personnelService: PersonnelService, private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.loadMessages();
    this.loadCommentsForMessages();
  }

  getTimeDifference(date: Date): string {
    const now = new Date();
    const diff = Math.abs(now.getTime() - new Date(date).getTime());
    const minutes = Math.floor(diff / 60000);
    if (minutes === 0) {
      return "à l'instant";
    } else if (minutes < 60) {
      return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else {
      const hours = Math.floor(minutes / 60);
      if (hours < 24) {
        return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
      } else {
        const days = Math.floor(hours / 24);
        return `il y a ${days} jour${days > 1 ? 's' : ''}`;
      }
    }
  }

  loadMessages() {
    this.personnelService.listePublications().subscribe(publications => {
      this.publications = publications;
      // Charger les commentaires pour chaque message
      this.loadCommentsForMessages();
    });
  }

  loadCommentsForMessages() {
    // Parcourir chaque message et charger ses commentaires
    this.publications.forEach(publication => {
      this.personnelService.tousCommentaires(publication.idPublication).subscribe(commentaires => {
        publication.commentaires = commentaires;
      });
    });
  }

  deleteMessage(publication: Publication) {
    let conf = confirm("Are you sure?");
    if (conf) {
      this.personnelService.supprimerPublication(publication.idPublication).subscribe(() => {
        this.loadMessages();
        this.successMessage = 'publication effacée avec succés.';
      });
    }
  }

  deleteCommentaire(commentaire: Commentaire): void {
    this.personnelService.supprimerCommentaire(commentaire.idCommentaire).subscribe(() => {
      this.loadCommentsForMessages();
    });
  }

  loadCommentaires(publication: Publication): void {
    this.personnelService.tousCommentaires(publication.idPublication).subscribe(data => {
      publication.commentaires = data;
    });
  }

  addComment(publication: Publication) {
    const comment = this.newComments[publication.idPublication]?.trim();
    if (comment) {
      const newComment = new Commentaire();
      newComment.commentaire = comment;
      newComment.dateAjout = new Date();
      newComment.publication = publication;

      this.personnelService.ajouterCommentaire(publication.idPublication, newComment).subscribe(() => {
        // Mettre à jour les commentaires après l'ajout réussi
        this.personnelService.tousCommentaires(publication.idPublication).subscribe(commentaires => {
          publication.commentaires = commentaires;
        });

        // Réinitialiser le champ de texte
        this.newComments[publication.idPublication] = '';
      });
    }
  }
}