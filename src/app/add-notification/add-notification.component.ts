import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { Router } from '@angular/router';
import { Personnel } from '../model/personnel.model';
import { Absence } from '../model/absence.model';
import { Notification } from '../model/notification.model';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})


  export class AddNotificationComponent implements OnInit {
    newNotification = new Notification();
    personnels!: Personnel[];
    selectedPersonnel: Personnel | undefined;
    showPart1: boolean = false;
    showPart2: boolean = false;
    showPart3: boolean = false;
    
    constructor(private personnelService: PersonnelService, private router : Router) {}
  
    ngOnInit(): void {
      this.personnelService.listePersonnels().subscribe(personnels => {
        this.personnels = personnels;
      });
    }
  
    addNotification() {
      // Vérifier si le type et l'état sont sélectionnés
      if (!this.newNotification.type || !this.newNotification.etat) {
        console.error('Veuillez sélectionner un type et un état.');
        alert('Veuillez sélectionner un type et un état.');
        return;
      }
  
      // Si un personnel est sélectionné, l'ajouter à la notification
      if (this.selectedPersonnel) {
        this.newNotification.personnel = this.selectedPersonnel;
      }
  
      this.personnelService.ajouterNotification(this.newNotification).subscribe(() => {
        console.log('Notification ajoutée avec succès.');
        this.router.navigate(['/notification']);
      }, error => {
        console.error('Erreur lors de l\'ajout de la notification :', error);
        alert('Une erreur est survenue lors de l\'ajout de la notification. Veuillez réessayer.');
      });
    }   
      
    showPart(partNumber: number) {
      this.showPart1 = partNumber === 1;
      this.showPart2 = partNumber === 2;
      this.showPart3 = partNumber === 3;
    }   
           
}