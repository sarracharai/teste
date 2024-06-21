import { Component, OnInit } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { Router } from '@angular/router';
import { Assiduite } from '../model/assiduite.model';
import { Contrat } from '../model/contrat.model';
import { PersonnelService } from '../services/personnel.service';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  personnelCounts: { department: string, count: number }[] = [];
  notifications! :Notification[] ;
  personnel! :Personnel[] ;
  assiduites? : Assiduite[] ;
  contrats?:Contrat[]
  nombreNotifications: number = 0;
  nombreDepartement: number = 0;
  nombreHeuresTravailleesMoyenne: number = 0;
  moyenneSalaire: number = 0;
  nombrePersonnel: number = 0;
  nombreFemmes: number = 0;
  nombreHommes: number = 0;
  nombreContrats: number = 0;
  nombreCDD: number = 0;  
  nombreCDI: number = 0;
  constructor( private personnelService: PersonnelService ,private router: Router ,public authService: AuthService) {
  
      }
      

      ngOnInit(): void {
 
        this.countNotifications();
        this.countPersonnel();
       // this.countDepartement();
        this.chargerAssiduites(); 
        this.calculerMoyenneHeuresTravaillees();
        this.chargerContrats();
       // this.AverageSalaire();
       // this.countFemmes();
       // this.countHommes();
        this.countContrats();
        this.countCDD();  
        this.countCDI();
        
       
       }
  countNotifications(): void {
    this.personnelService.listeNotifications().subscribe(notifications => {
      // Filter the notifications array to get only those with the state "En attente"
      const pendingNotifications = notifications.filter(notification => notification.etat === 'en attente');
      // Count the filtered notifications
      this.nombreNotifications = pendingNotifications.length;
    });
  }
  countPersonnel(): void {
    this.personnelService.listePersonnels().subscribe(personnel => {
      // Compter le nombre total de personnel
      this.nombrePersonnel = personnel.length;
    });
  }
  // countDepartement(): void {
  //   this.personnelService.listeDepartements().subscribe(personnel => {
  //     // Compter le nombre total de personnel
  //     this.nombreDepartement = personnel.length;
  //   });
  // }


  
  calculerMoyenneHeuresTravaillees(): void {
    if (this.assiduites && this.assiduites.length > 0) {
      let totalHeuresTravaillees = 0;
      for (let assiduite of this.assiduites) {
        totalHeuresTravaillees += assiduite.nbHeures;
      }
      this.nombreHeuresTravailleesMoyenne = totalHeuresTravaillees / this.assiduites.length;
    }
  }
  chargerAssiduites(){
    this.personnelService.listeAssiduite().subscribe(ass => {
      console.log(ass);
      this.assiduites = ass;
      this.calculerMoyenneHeuresTravaillees();
      
    });
  }
  // AverageSalaire(): void {
  //   if (this.contrats && this.contrats.length > 0) {
  //     let total = 0;
  //     for (let contrat of this.contrats) {
  //       total +=contrat.salaire;
  //     }
  //     this.moyenneSalaire= total / this.contrats.length;
  //   }
  // }
  chargerContrats(): void {
    this.personnelService.listeContrat().subscribe(contrats => {
        this.contrats = contrats;
        //this.AverageSalaire();
        this.countContrats();
        this.countCDD();  
        this.countCDI();
    });
}
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }

  // countFemmes(): void {
  //   this.personnelService.listePersonnels().subscribe(personnel => {
  //     this.nombreFemmes = personnel.filter(p => p.sexe === 'Femme').length;
  //   });
  // }

  // countHommes(): void {
  //   this.personnelService.listePersonnels().subscribe(personnel => {
  //     this.nombreHommes = personnel.filter(p => p.sexe === 'Homme').length;
  //   });
  // }
  countContrats(): void {  // Add this method
    if (this.contrats) {
      this.nombreContrats = this.contrats.length;
    }
  }
  countCDD(): void {
    if (this.contrats && this.contrats.length > 0) {
      this.nombreCDD = this.contrats.filter(contrat => contrat.type === 'CDD').length;
    }
  }

  countCDI(): void {
    if (this.contrats && this.contrats.length > 0) {
      this.nombreCDI = this.contrats.filter(contrat => contrat.type === 'CDI').length;
    }
  }
}