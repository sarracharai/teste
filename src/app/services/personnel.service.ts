import { Departement } from '../model/departement.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { Observable } from 'rxjs';
import { Conge } from '../model/conge.model';
import { DepartementWrapper } from '../model/departementWrapped.model';
import { Pret } from '../model/pret.model';
import { Assiduite } from '../model/assiduite.model';
import { Absence } from '../model/absence.model';
import { Contrat } from '../model/contrat.model';
import { Document } from '../model/docAdministratifs.model';
import { AuthService } from './auth.service';



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
  apiURLAs="http://localhost:8083/ressourcesH/api/assiduite"
  




  assiduites!: Assiduite[]; //un tableau de Assiduite
  absences!:Absence[]; //un tableau d'absence'
  documents!:Document[] //un tableau de document
  personnels! : Personnel[];  //un tableau de Personnel
  

  constructor(private http : HttpClient,private authService: AuthService) { 

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


  listePersonnels():Observable<Personnel[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Personnel[]>(this.baseUrl+"/all",{headers:httpHeaders}); 
    }

  ajouterPersonnel(person: Personnel):Observable<Personnel> { 
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Personnel>(this.baseUrl+"/addP", person, {headers:httpHeaders});
        }


  consulterPersonnel(idPersonnel: number): Observable<Personnel> {
    const url = `${this.baseUrl}/getbyid/${idPersonnel}`;
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

  supprimerPersonnel(idPersonnel : number) {
      const url = `${this.baseUrl}/delp/${idPersonnel}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.delete(url, {headers:httpHeaders});
      }

  getPersonnelById(idPersonnel: number): Observable<Personnel> {
    const url = `${this.baseUrl}/getbyid/${idPersonnel}`;
    return this.http.get<Personnel>(url, httpOptions);
  }

  trierPersonnels(){
    this.personnels = this.personnels.sort((n1,n2) => {
      if (n1.idPersonnel! > n2.idPersonnel!) 
      { return 1; } 
      if (n1.idPersonnel! < n2.idPersonnel!) 
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

  rechercherParNom(nomPersonnel: string):Observable< Personnel[]> {
      const url = `${this.baseUrl}/personsByName/${nomPersonnel}`;
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




      
    
    /*
              listeAbsences():Observable<AbsenceWrapper>{
                return this.http.get<AbsenceWrapper>(this.apiURLAb);
                }
    */
                
       /////////////   les meth de Documents  /////////////////////
      
  listeDocument(): Observable<Document[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Document[]>(this.apiURLDoc+"/all",{headers:httpHeaders});
        }
        
      
  ajouterDocument( as: Document):Observable<Document>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Document>(this.apiURLDoc+"/add", as, {headers:httpHeaders});
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
    
      
      }