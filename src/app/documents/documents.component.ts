
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from '../model/docAdministratifs.model';
import { PersonnelService } from '../services/personnel.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent  implements OnInit {
  documents? : Document[] ;
  constructor( private personnelService: PersonnelService ,private router: Router,
    public authService: AuthService ) {
  
      }

      ngOnInit(): void {
 
        this.chargerDocuments();
       }
      
       chargerDocuments(){
         this.personnelService.listeDocument().subscribe(docs=> {
           console.log(docs);
           this.documents = docs;
           });
       }
    
    
       supprimerDocument(d: Document)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.personnelService.supprimerDocument(d.idDocument).subscribe(() => {
            console.log("document supprimé");
            this.chargerDocuments();     
          
    });
    }
}
