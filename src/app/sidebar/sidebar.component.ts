import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PersonnelService } from '../services/personnel.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  searchTerm: string = '';
  filteredItems: string[] = [];
  nombreNotificationsConge: number = 0;
  nombreNotificationsPret: number = 0;
  nombreNotificationsAbsence: number = 0;
  showNotificationIcon: boolean = true;
  
  constructor(private personnelService: PersonnelService ,private router: Router,public authService: AuthService){
    this.filteredItems = this.getAllItems();
  }
  
  getAllItems(): string[] {
    return ['dashboard', 'profile', 'users', 'publication', 'notifications', 'order', 'settings'];
  }

  filterItems() {
    const lowerSearchTerm = this.searchTerm.toLowerCase();
    this.filteredItems = this.getAllItems().filter(item => item.toLowerCase().includes(lowerSearchTerm));
  }

  
  redirectToProfile() {
    const role = this.authService.getRole();
    if (role === 'ADMIN') {
      this.router.navigate(['/admin']);
    } else if (role === 'RESPONSABLE') {
      this.router.navigate(['/responsable']);
    } 
  }

  initializeNavbar() {
    const closeBtn = document.querySelector("#btn") as HTMLElement | null;
    const searchBtn = document.querySelector(".bx-search") as HTMLElement | null;

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
        if (sidebar) {
          sidebar.classList.toggle("open");
          this.menuBtnChange(closeBtn, sidebar);
        }
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
        if (sidebar) {
          sidebar.classList.toggle("open");
          this.menuBtnChange(closeBtn, sidebar);
        }
      });
    }
  }

  menuBtnChange(closeBtn: HTMLElement | null, sidebar: HTMLElement | null) {
    if (closeBtn && sidebar) {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }
  }


  countNotificationsAbsence(): void {
    this.personnelService.listeNotifications().subscribe(notifications => {
      // Filter the notifications array to get only those with the state "En attente"
      const pendingNotifications = notifications.filter(notification => notification.etat === 'en attente' && notification.type === 'absence');
      // Count the filtered notifications
      this.nombreNotificationsAbsence = pendingNotifications.length;
    });
  }
  countNotificationsConge(): void {
    this.personnelService.listeNotifications().subscribe(notifications => {
      // Filter the notifications array to get only those with the state "En attente"
      const pendingNotifications = notifications.filter(notification => notification.etat === 'en attente' && notification.type === 'congé');
      // Count the filtered notifications
      this.nombreNotificationsConge = pendingNotifications.length;
    });
  }

  countNotificationsPret(): void {
    this.personnelService.listeNotifications().subscribe(notifications => {
      // Filter the notifications array to get only those with the state "En attente"
      const pendingNotifications = notifications.filter(notification => notification.etat === 'en attente' && notification.type === 'pret');
      // Count the filtered notifications
      this.nombreNotificationsPret = pendingNotifications.length;
    });
  }

  showNotification() {
    alert('Notification: You have new messages!');
  }
  
  ngOnInit(): void {
    this.initializeNavbar();
    this.countNotificationsAbsence();
    this.countNotificationsPret();
    this.countNotificationsConge();

   
  }
}
