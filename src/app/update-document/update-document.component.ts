
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../model/docAdministratifs.model';
import { PersonnelService } from '../services/personnel.service';
@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css']
})
export class UpdateDocumentComponent implements OnInit {
  currentDocument = new Document();
  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private personnelService: PersonnelService) { }

    ngOnInit(): void {
      
      
      this.personnelService.consulterDocument(this.activatedRoute.snapshot.params['id']).
      subscribe( doc =>{ this.currentDocument = doc;
      
      } ) ;
      }
   //   
  updateDocument(){
      
      this.personnelService.updateDocument(this.currentDocument).subscribe(doc => {
      this.router.navigate(['/documents']);
      }); 
    }
  
  
}
