import { Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Notification } from '../model/notification.model';

@Component({
  selector: 'app-personnel-dashboard',
  templateUrl: './personnel-data.component.html',
  styleUrls: ['./personnel-data.component.css']
})
export class PersonnelDataComponent implements OnInit {

  nombreNotificationsAccepte: number = 0;
  nombreNotificationsRefuse: number = 0;
  showNotificationIcon: boolean = true;
  personnelData: any;
  error: boolean = false;
  personnelNotif: any;

  constructor(
    private personnelService: PersonnelService,
    public authService: AuthService,
    private router: Router
  ) {}

  navigateToSection(sectionId: string) {
    console.log('Navigating to section:', sectionId);
    this.router.navigate([], { fragment: sectionId, queryParamsHandling: 'preserve' });
  }

  countAcceptedNotifications(): void {
    this.personnelService.getNotificationData().subscribe((notifications: Notification[]) => {
      const acceptedNotifications = notifications.filter((notification: Notification) => 
        notification.etat === 'accepté' && !notification.lu
      );
      this.nombreNotificationsAccepte = acceptedNotifications.length;
    }, error => {
      console.error('Error fetching accepted notifications:', error);
    });
  }

  countRefusedNotifications(): void {
    this.personnelService.getNotificationData().subscribe((notifications: Notification[]) => {
      const refusedNotifications = notifications.filter((notification: Notification) => 
        notification.etat === 'refusé' && !notification.lu
      );
      this.nombreNotificationsRefuse = refusedNotifications.length;
    }, error => {
      console.error('Error fetching refused notifications:', error);
    });
  }

  showNotification() {
    alert('Notification: You have new messages!');
  }

  ngOnInit(): void {
    this.countAcceptedNotifications(); 
    this.countRefusedNotifications();
    this.authService.loadToken();
    const token = this.authService.getToken();

    console.log('Loaded Token:', token);

    if (token) {
      this.personnelService.getPersonnelData().subscribe(
        (personnelResponse) => {
          this.personnelData = personnelResponse;
          console.log('Personnel Data:', this.personnelData);
        },
        (personnelError) => {
          console.error('Error fetching personnel data:', personnelError);
        }
      );

      this.personnelService.getNotificationData().subscribe(
        (notificationResponse) => {
          this.personnelNotif = notificationResponse;
          console.log('Notification Data:', this.personnelNotif);
        },
        (notificationError) => {
          console.error('Error fetching notification data:', notificationError);
        }
      );
    }

    //   if (this.authService.isNewlyRegistered()) {
    //     console.log('User is newly registered');
    //     if (confirm('Bienvenue! Veuillez compléter votre profil.')) {
    //       this.router.navigate(['/newProfil']); // Remplacez 'newProfil' par le chemin de votre page de formulaire
    //     }
    //   }
    // } else {
    //   console.error('No token found. Redirecting to login.');
    //   this.router.navigate(['/login']);
    // }
  

    }
  navigateToProfileEdit() {
    this.router.navigate(['/editProfil'], { state: { personnelData: this.personnelData } });
  }
}
  
