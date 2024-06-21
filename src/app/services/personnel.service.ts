import { Departement } from '../model/departement.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { Observable, catchError, forkJoin, map, throwError } from 'rxjs';
import { Conge } from '../model/conge.model';
import { DepartementWrapper } from '../model/departementWrapped.model';
import { Pret } from '../model/pret.model';
import { Assiduite } from '../model/assiduite.model';
import { Absence } from '../model/absence.model';
import { Contrat } from '../model/contrat.model';
import { Document } from '../model/docAdministratifs.model';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Responsable } from '../model/responsable.model';
import { Notification} from '../model/notification.model';
import { Admin } from '../model/admin.model';
import { Publication } from '../model/publication.model';
import { Commentaire } from '../model/commentaire.model';


const httpOptions = {
 
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
};

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
 
  baseUrl="http://localhost:8083/ressourcesH/api";
  apiURL="http://localhost:8083/ressourcesH/dep";
  apiURLCong="http://localhost:8083/ressourcesH/api/conge";
  apiURLP="http://localhost:8083/ressourcesH/api/pret";
  apiURLAb="http://localhost:8083/ressourcesH/api/abs";
  apiURLDoc="http://localhost:8083/ressourcesH/api/documents";
  apiURLCon="http://localhost:8083/ressourcesH/api/contrat";
  apiURLAs="http://localhost:8083/ressourcesH/api/assiduite";
  apiNOT="http://localhost:8083/ressourcesH/api/notification";
  apiResponsable="http://localhost:8083/ressourcesH/api/Responsable";
  private apiAdmin = 'http://localhost:8083/ressourcesH/api/Admin';
  apiDoc="http://localhost:8083/ressourcesH/api/documents";
  apiMess="http://localhost:8083/ressourcesH/api"
  apiComment="http://localhost:8083/ressourcesH/api/commentaire"


  assiduites!: Assiduite[]; //un tableau de Assiduite
  absences!:Absence[]; //un tableau d'absence'
  documents!:Document[] //un tableau de document
  personnels! : Personnel[];  //un tableau de Personnel
  notifications! : Notification[];  //un tableau de not
  publications!:Publication[] //un tableau;
  commentaires!:Commentaire[];
  
  private jwtHelper = new JwtHelperService();
  constructor(private http : HttpClient,private authService: AuthService) { 

  }

  getdocData(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token found.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(`${this.apiDoc}/data`, { headers });
  }

  getAdminData(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token found.'); // Gérer l'absence de token de manière appropriée
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(`${this.apiAdmin}/data`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('Une erreur s\'est produite :', error.error.message);
    } else {
      // Le backend a renvoyé une réponse avec un code d'erreur
      console.error(
        `Code d'erreur ${error.status}, ` +
        `Message : ${error.error}`);
    }
    // Renvoie une observable avec un message d'erreur convivial
    return throwError('Erreur de communication avec le serveur');
  }

  updateAdmin( admin: Admin):Observable<Admin>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Admin>(this.apiAdmin+"/update", admin, {headers:httpHeaders}); 
    }

  updateResponsable( resp: Responsable):Observable<Responsable>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Responsable>(this.apiResponsable+"/update", resp, {headers:httpHeaders}); 
    }

    getResponsableData(): Observable<any> {
      const token = this.authService.getToken();
      if (!token) {
        throw new Error('No token found.');
      }
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.get<any>(`${this.apiResponsable}/data`, { headers });
    }
  
  
  getPersonnelData(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token found.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(this.baseUrl+"/personnel/data", { headers })    
  }

  getNotificationData( ): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token found.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(this.apiNOT+"/data", { headers })    
  }

  listeNotificationData( ): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token found.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(this.apiNOT+"/data", { headers })    
  }


  markNotificationsAsRead(notifications: Notification[]): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token found.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.put(`${this.apiNOT}/markAsRead`, notifications, { headers });
  }

  getCongeData(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token found.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(this.apiURLCong+"/data", { headers })    
  }

  getPretData(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token found.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(this.apiURLP+"/data", { headers })    
  }

  getContratData(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token found.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(this.apiURLCon+"/data", { headers })    
  }

  getAssiduiteData(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token found.');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(this.apiURLAs+"/data", { headers })    
  }

  listePersonnels():Observable<Personnel[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Personnel[]>(this.baseUrl+"/all",{headers:httpHeaders}); 
    }

  //assiduite
  listeAssiduite(): Observable<Assiduite[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Assiduite[]>(this.apiURLAs+"/all",{headers:httpHeaders});
      }
  
  ajouterAssiduite( as: Assiduite):Observable<Assiduite>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.post<Assiduite>(this.apiURLAs+"/addass", as, {headers:httpHeaders});
        }

  supprimerAssiduite(id : number) {
    const url = `${this.apiURLAs}/delass/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.delete(url, {headers:httpHeaders});
        }

  updateAssiduite(as :Assiduite) : Observable<Assiduite> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.put<Assiduite>(this.apiURLAs+"/updateass", as, {headers:httpHeaders});
          }

    

  consulterAssiduite(id: number): Observable<Assiduite> {
    const url = `${this.apiURLAs}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Assiduite>(url,{headers:httpHeaders});
      }



        //////////////////

  listeAbsences(): Observable<Absence[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Absence[]>(this.apiURLAb+"/all",{headers:httpHeaders});
      }


  ajouterAbsence(ab: Absence): Observable<Absence> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Absence>(this.apiURLAb+"/addab", ab, {headers:httpHeaders});
        }


  consulterAbsence(id: number): Observable<Absence> {
    const url = `${this.apiURLAb}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Absence>(url,{headers:httpHeaders});
          }


  supprimerAbsence(id : number) {
    const url = `${this.apiURLAb}/delab/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders});
        }   
                
  updateAbsence(ab :Absence) : Observable<Absence> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Absence>(this.apiURLAb+"/updateab", ab, {headers:httpHeaders});
      }
                //////////////////////


 

  ajouterPersonnel(person: Personnel):Observable<Personnel> { 
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Personnel>(this.baseUrl+"/addP", person, {headers:httpHeaders});
        }


  consulterPersonnel(id: number): Observable<Personnel> {
    const url = `${this.baseUrl}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Personnel>(url,{headers:httpHeaders});
    }
    
  updatePersonnel( person: Personnel):Observable<Personnel>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Personnel>(this.baseUrl+"/updatep", person, {headers:httpHeaders}); 
    }

  supprimerPersonnel(id : number) {
      const url = `${this.baseUrl}/delp/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.delete(url, {headers:httpHeaders});
      }

  getPersonnelById(id: number): Observable<Personnel> {
    const url = `${this.baseUrl}/getbyid/${id}`;
    return this.http.get<Personnel>(url, httpOptions);
  }

  trierPersonnels(){
    this.personnels = this.personnels.sort((n1,n2) => {
      if (n1.id! > n2.id!) 
      { return 1; } 
      if (n1.id! < n2.id!) 
      {return -1;}
      return 0;
    });
     }

  listeDepartements():Observable<DepartementWrapper>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<DepartementWrapper>(this.apiURL,{headers:httpHeaders});  
     }

  rechercherParDepartement(idDep: number):Observable< Personnel[]> {
      const url = `${this.baseUrl}/personsdep/${idDep}`;
        return this.http.get<Personnel[]>(url); 
      }

  rechercherParNom(nom: string):Observable< Personnel[]> {
      const url = `${this.baseUrl}/personsByName/${nom}`;
        return this.http.get<Personnel[]>(url); }

  
  ajouterDepartement( dep: Departement):Observable<Departement>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Departement>(this.apiURL, dep,{headers:httpHeaders});
   }




  updateDepartement( dep: Departement):Observable<Departement>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Departement>(this.apiURL+"/updateDep", dep, {headers:httpHeaders}); 
    }

  supprimerDepartement(idDep : number) {
      const url = `${this.apiURL}/delDep/${idDep}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.delete(url, {headers:httpHeaders});
      }

   consulterDepartement(idDep: number): Observable<Departement> {
    const url = `${this.apiURL}/getbyid/${idDep}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Departement>(url,{headers:httpHeaders});
    }



      //congee
  listeConges():Observable<Conge[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Conge[]>(this.apiURLCong +"/all",{headers:httpHeaders}); 
  }

  ajouterConge(cong: Conge):Observable<Conge> { 
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Conge>(this.apiURLCong +"/addConge", cong, {headers:httpHeaders});}

  updateConge( cong: Conge):Observable<Conge>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Conge>(this.apiURLCong +"/update", cong,  {headers:httpHeaders}); }

  supprimerConge(idConge : number) { 
    const url = `${this.apiURLCong }/delConge/${idConge}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders});
  }

  consulterConge(idConge: number): Observable<Conge> {
    const url = `${this.apiURLCong}/getbyid/${idConge}`;
    return this.http.get<Conge>(url);
      }
  


 

  //pret
  listePrets():Observable<Pret[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Pret[]>(this.apiURLP+"/all",{headers:httpHeaders}); }


  ajouterPret(p: Pret):Observable<Pret> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.post<Pret>(this.apiURLP +"/addPret", p, {headers:httpHeaders});}
  
  updatePret( p: Pret):Observable<Pret>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Pret>(this.apiURLP +"/update", p, {headers:httpHeaders}); }
  
  supprimerPret(idPret : number) { 
    const url = `${this.apiURLP }/delete/${idPret}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url,  {headers:httpHeaders});
    }  

  consulterPret(idPret: number): Observable<Pret> {
    const url = `${this.apiURLP}/${idPret}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Pret>(url,{headers:httpHeaders});
      }
                
       /////////////   les meth de Documents  /////////////////////
      
  listeDocument(): Observable<Document[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Document[]>(this.apiURLDoc+"/all",{headers:httpHeaders});
        }
        
      
  // ajouterDocument( as: Document):Observable<Document>{
  //   let jwt = this.authService.getToken();
  //   jwt = "Bearer "+jwt;
  //   let httpHeaders = new HttpHeaders({"Authorization":jwt})
  //   return this.http.post<Document>(this.apiURLDoc+"/add", as, {headers:httpHeaders});
  //      }
   
  ajouterDocument(document: Document, file: File): Observable<Document> {
    // Obtenez le jeton JWT
    let jwt = "Bearer " + this.authService.getToken();
    const httpHeaders = new HttpHeaders({ "Authorization": jwt });
    const formData = new FormData();
  
    // Ajoutez la date formatée si elle est valide
    if (document.dateCreation && !isNaN(new Date(document.dateCreation).getTime())) {
      formData.append('dateCreation', document.dateCreation);  // Assurez-vous que dateCreation est de type string
    } else {
      console.error('Format de date invalide:', document.dateCreation);
      return throwError('Format de date invalide');
    }
  
    // Ajoutez les autres champs
    formData.append('username', document.username);
    formData.append('type', document.type.toString());
    formData.append('file', file);
  
    // Envoyez la requête POST
    return this.http.post<Document>(`${this.apiURLDoc}/add`, formData, { headers: httpHeaders })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur lors de l\'ajout du document:', error);
          return throwError('Erreur lors de l\'ajout du document: ' + error.message);
        })
      );
  }

  supprimerDocument(id : number) {
    const url = `${this.apiURLDoc}/delete/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders});

      }

  consulterDocument(id: number): Observable<Document> {
    const url = `${this.apiURLDoc}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Document>(url,{headers:httpHeaders});
          }

  updateDocument(as :Document) : Observable<Document> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Document>(this.apiURLDoc+"/updatedoc", as, {headers:httpHeaders});
      }
          
          /////////////////////////////////////////////////////////////////
      
  listeContrat(): Observable<Contrat[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Contrat[]>(this.apiURLCon+"/all",{headers:httpHeaders}); 
   }
    
  ajouterContrat( as: Contrat):Observable<Contrat>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Contrat>(this.apiURLCon+"/add", as, {headers:httpHeaders});
      }
    
  supprimerContrat(id : number) {
    const url = `${this.apiURLCon}/delete/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders});
      }
    
  updateContrat(con :Contrat) : Observable<Contrat>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Contrat>(this.apiURLCon+"/update", con, {headers:httpHeaders});
        }
    
  consulterContrat(id: number): Observable<Contrat> {
    const url = `${this.apiURLCon}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Contrat>(url,{headers:httpHeaders});
        }

   listeResponsables():Observable<Responsable[]> {
    return this.http.get<Responsable[]>(this.apiResponsable +"/all"); 
       } 

  
  listeNotifications(): Observable<Notification[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Notification[]>(this.apiNOT+"/all",{headers:httpHeaders});
        }
              
            
  ajouterNotification( as: Notification):Observable<Notification>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Notification>(this.apiNOT+"/add", as, {headers:httpHeaders});
      }

  supprimerNotification(id : number) {
    const url = `${this.apiNOT}/delete/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders});
      }


consulterNotification(id: number): Observable<Notification> {
const url = `${this.apiNOT}/getbyid/${id}`;
let jwt = this.authService.getToken();
                jwt = "Bearer "+jwt;
                let httpHeaders = new HttpHeaders({"Authorization":jwt})
                return this.http.get<Notification>(url,{headers:httpHeaders});
                }
                updateNotification(as :Notification) : Observable<Notification> {
                let jwt = this.authService.getToken();
                jwt = "Bearer "+jwt;
                let httpHeaders = new HttpHeaders({"Authorization":jwt})
                return this.http.put<Notification>(this.apiNOT+"/update", as, {headers:httpHeaders});
              }
///////////////////// 2juin ////////

ajouterPublication(publication: Publication): Observable<Publication> {
  let jwt = this.authService.getToken();
  jwt = "Bearer " + jwt;
  let httpHeaders = new HttpHeaders({ "Authorization": jwt });
  return this.http.post<Publication>(`${this.apiMess}/publication/ajouter`, publication, { headers: httpHeaders });
}

supprimerPublication(id: number): Observable<void> {
  const url = `${this.apiMess}/publication/supprimer/${id}`;
  let jwt = this.authService.getToken();
  jwt = "Bearer " + jwt;
  let httpHeaders = new HttpHeaders({ "Authorization": jwt });
  return this.http.delete<void>(url, { headers: httpHeaders });
}

listePublications(): Observable<Publication[]> {
  let jwt = this.authService.getToken();
  jwt = "Bearer " + jwt;
  let httpHeaders = new HttpHeaders({ "Authorization": jwt });
  return this.http.get<Publication[]>(`${this.apiMess}/publications/tous`, { headers: httpHeaders });
}

ajouterCommentaire(publicationId: number, commentaire: Commentaire): Observable<Commentaire> {
  let jwt = this.authService.getToken();
  jwt = "Bearer " + jwt;
  let httpHeaders = new HttpHeaders({ "Authorization": jwt });
  return this.http.post<Commentaire>(`${this.apiMess}/ajouterCommentaires/${publicationId}`, commentaire, { headers: httpHeaders });
}
supprimerCommentaire(id: number): Observable<void> {
const url = `${this.apiMess}/supprimerCommentaire/${id}`;
let jwt = this.authService.getToken();
  jwt = "Bearer " + jwt;
  let httpHeaders = new HttpHeaders({ "Authorization": jwt });
  return this.http.delete<void>(url, { headers: httpHeaders });

}
tousCommentaires(publicationId: number): Observable<Commentaire[]> {
  let jwt = this.authService.getToken();
  jwt = "Bearer " + jwt;
  let httpHeaders = new HttpHeaders({ "Authorization": jwt });
  return this.http.get<Commentaire[]>(`${this.apiMess}/tousCommentaires/${publicationId}`, { headers: httpHeaders });
}

getUsers(): Observable<any[]> {
  const personnels$ = this.http.get<any[]>(this.baseUrl+"/all");
  const admins$ = this.http.get<any[]>(this.apiAdmin+"/all");

  return forkJoin([personnels$, admins$]).pipe(
    map(([personnels, admin]) => {
      // Ajout d'un type pour différencier les utilisateurs
      personnels.forEach(p => p.userType = 'Personnel');
      admin.forEach(a => a.userType = 'Admin');
      return [...personnels, ...admin];
    })
  );
}

ajouterResponsable( resp: Responsable):Observable<Responsable>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Responsable>(this.apiResponsable+"/addResponsable", resp, {headers:httpHeaders});
      }


  getAdminById(id: number): Observable<Admin> {
  const url = `${this.apiAdmin}/getbyid/${id}`;
  return this.http.get<Admin>(url, httpOptions).pipe(
  catchError(this.handleError)
    );
      }

      consulterAdmin(id: number): Observable<Admin> {
          const url = `${this.apiAdmin}/getbyid/${id}`;
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.get<Admin>(url,{headers:httpHeaders});
          }
        
    }