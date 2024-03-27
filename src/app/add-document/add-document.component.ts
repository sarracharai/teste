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
  
  constructor(private personnelService: PersonnelService,
    private router : Router) {}

    ngOnInit(): void {
     
    }

    addDocument(){
      
            this.personnelService.ajouterDocument(this.newDocument).subscribe(() => {
            this.router.navigate(['documents']);
              });
              }

              
}