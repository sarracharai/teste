import { Component, OnInit } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Notification } from '../model/notification.model';
import { PersonnelService } from '../services/personnel.service';
@Component({
  selector: 'app-update-notification',
  templateUrl: './update-notification.component.html',
  styleUrls: ['./update-notification.component.css']
})
export class UpdateNotificationComponent implements OnInit {
  currentNotification = new Notification();
  personnels! : Personnel[];
  updatedAsId! : String;
  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private personnelService: PersonnelService) { }

    ngOnInit(): void {
      
      this.personnelService.listePersonnels().
      subscribe(abs => {this.personnels = abs;
      console.log(abs);
      });
      this.personnelService.consulterNotification(this.activatedRoute.snapshot.params['id']).
      subscribe( as =>{ this.currentNotification = as;
        this.updatedAsId =this.currentNotification.personnel.id.toString();
      } ) ;
      }
   //   
  updateNotification(){
      
    this.currentNotification.personnel = this.personnels?.find(ab => ab.id.toString() === this.updatedAsId)!;
    this.personnelService.updateNotification(this.currentNotification).subscribe(as => {
    this.router.navigate(['/notification']);
    }); 
    }
  
  
}