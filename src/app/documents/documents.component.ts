
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from '../model/docAdministratifs.model';
import { PersonnelService } from '../services/personnel.service';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent  implements OnInit {
  documents? : Document[] ;
 

  constructor( private personnelService: PersonnelService ,private router: Router,private http: HttpClient,
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

    downloadPdf(document: Document) {
      const pdfUrl = document.url;
      this.http.get(pdfUrl, { responseType: 'blob' }).subscribe(response => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url); // ou manipulez le blob comme nécessaire
      }, error => {
        console.error('Error downloading PDF:', error);
      });
    }
    
  

    openPdf(url: string): void {
      const jwtToken = this.authService.getToken();
      const headers = { Authorization: `Bearer ${jwtToken}` };
    
      this.http.get(url, { headers, responseType: 'blob' }).subscribe(
        (response) => {
          const blob = new Blob([response], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          window.open(url, '_blank');
        },
        (error) => {
          console.error('Failed to open PDF:', error);
          // Gérer les erreurs ici
        }
      );
    }


     // Fonction pour afficher le contenu du fichier
  async afficherContenuFichier(document: Document): Promise<void> {
    try {
      const response = await fetch(document.url); // Remplacez document.url avec l'URL appropriée du document
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);

      window.open(objectUrl); // Ouvre le contenu du fichier dans une nouvelle fenêtre
    } catch (error) {
      console.error('Erreur lors de l\'affichage du fichier :', error);
    }
  }
}