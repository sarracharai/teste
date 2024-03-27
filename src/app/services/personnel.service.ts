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
  apiURLAss="http://localhost:8083/ressourcesH/api"
  




  assiduites!: Assiduite[]; //un tableau de Assiduite
    absences!:Absence[]; //un tableau d'absence'
    documents!:Document[] //un tableau de document
    personnels! : Personnel[];  //un tableau de Personnel
  

  constructor(private http : HttpClient) { 

  }


  //assiduite

  listeAssiduite(): Observable<Assiduite[]> {
    return this.http.get<Assiduite[]>(this.apiURLAss+"/all");
  }
  
  ajouterAssiduite( as: Assiduite):Observable<Assiduite>{
    return this.http.post<Assiduite>(this.apiURLAss +"/addass", as, httpOptions);
    }

    supprimerAssiduite(id : number) {
      const url = `${this.apiURLAss}/delass/${id}`;
      return this.http.delete(url, httpOptions);
      }

    updateAssiduite(as :Assiduite) : Observable<Assiduite>
    {
        return this.http.put<Assiduite>(this.apiURLAss+"/updateass", as, httpOptions);
    }

    //////////////////

    consulterAssiduite(id: number): Observable<Assiduite> {
        const url = `${this.apiURLAss}/getbyid/${id}`;
        return this.http.get<Assiduite>(url);
        }

  listeAbsences():Observable< Absence[]>{
    return this.http.get<Absence[]>(this.apiURLAb);
    }
  ajouterAbsence(ab: Absence): Observable<Absence> {
       return this.http.post<Absence>(this.apiURLAb+"/addab",ab, httpOptions);
     }
     consulterAbsence(id: number): Observable<Absence> {
      const url = `${this.apiURLAb}/getbyid/${id}`;
      return this.http.get<Absence>(url);
      }
     supprimerAbsence(id : number) {
                const url = `${this.apiURLAb}/delab/${id}`;
                return this.http.delete(url, httpOptions);
                }   
                
     updateAbsence(as :Absence) : Observable<Absence>  {
         return this.http.put<Absence>(this.apiURLAb+"/updateab", as, httpOptions);
                }  

                //////////////////////


  listePersonnels():Observable<Personnel[]> {
    return this.http.get<Personnel[]>(this.baseUrl); 
    }

  ajouterPersonnel(person: Personnel):Observable<Personnel> { 
    return this.http.post<Personnel>(this.baseUrl +"/addP", person, httpOptions);
    }


  consulterPersonnel(idPersonnel: number): Observable<Personnel> {
    const url = `${this.baseUrl}/${idPersonnel}`;
    return this.http.get<Personnel>(url);
    }
    
  updatePersonnel( person: Personnel):Observable<Personnel>{
    return this.http.put<Personnel>(this.baseUrl, person, httpOptions); 
    }

  supprimerPersonnel(idPersonnel : number) { 
    const url = `${this.baseUrl}/${idPersonnel}`;
    return this.http.delete(url, httpOptions);
  }

  getPersonnelById(idPersonnel: number): Observable<Personnel> {
    const url = `${this.baseUrl}/${idPersonnel}`;
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
     return this.http.get<DepartementWrapper>(this.apiURL);
     }

  rechercherParDepartement(idDep: number):Observable< Personnel[]> {
      const url = `${this.baseUrl}/personsdep/${idDep}`;
        return this.http.get<Personnel[]>(url); 
      }

  rechercherParNom(nomPersonnel: string):Observable< Personnel[]> {
      const url = `${this.baseUrl}/personsByName/${nomPersonnel}`;
        return this.http.get<Personnel[]>(url); }

  
  ajouterDepartement( dep: Departement):Observable<Departement>{
      return this.http.post<Departement>(this.apiURL, dep, httpOptions); }



      //congee
  listeConges():Observable<Conge[]>{
  return this.http.get<Conge[]>(this.apiURLCong +"/all"); }

  ajouterConge(cong: Conge):Observable<Conge> { 
    return this.http.post<Conge>(this.apiURLCong +"/addConge", cong, httpOptions);}

  updateConge( cong: Conge):Observable<Conge>{
      return this.http.put<Conge>(this.apiURLCong +"/update", cong, httpOptions); }

  supprimerConge(idConge : number) { 
    const url = `${this.apiURLCong }/${idConge}`;
    return this.http.delete(url, httpOptions);
  }

  consulterConge(idConge: number): Observable<Conge> {
    const url = `${this.apiURLCong}/${idConge}`;
    return this.http.get<Conge>(url);
      }
  


 

  //pret
  listePrets():Observable<Pret[]>{
    return this.http.get<Pret[]>(this.apiURLP+"/all"); }


  ajouterPret(p: Pret):Observable<Pret> { 
    return this.http.post<Pret>(this.apiURLP +"/addPret", p, httpOptions);}
  
  updatePret( p: Pret):Observable<Pret>{
    return this.http.put<Pret>(this.apiURLP +"/update", p, httpOptions); }
  
  supprimerPret(idPret : number) { 
    const url = `${this.apiURLP }/${idPret}`;
    return this.http.delete(url, httpOptions);
    }  

  consulterPret(idPret: number): Observable<Pret> {
    const url = `${this.apiURLP}/${idPret}`;
      return this.http.get<Pret>(url);
      }




      
    
    /*
              listeAbsences():Observable<AbsenceWrapper>{
                return this.http.get<AbsenceWrapper>(this.apiURLAb);
                }
    */
                
       /////////////   les meth de Documents  /////////////////////
      
       listeDocument(): Observable<Document[]> {
        return this.http.get<Document[]>(this.apiURLDoc+"/all");
      }
      
      ajouterDocument( doc: Document):Observable<Document>{
        return this.http.post<Document>(this.apiURLDoc +"/add", doc, httpOptions);
        }


       
    
        supprimerDocument(id : number) {
          const url = `${this.apiURLDoc}/delete/${id}`;
          return this.http.delete(url, httpOptions);
          }
    
        updateDocument(doc :Document) : Observable<Document>
        {
            return this.http.put<Document>(this.apiURLDoc+"/updatedoc", doc, httpOptions);
        }
    
        consulterDocument(id: number): Observable<Document> {
            const url = `${this.apiURLDoc}/getbyid/${id}`;
            return this.http.get<Document>(url);
            }
    /////////////////////////////////////////////////////////////////
      
    listeContrat(): Observable<Contrat[]> {
      return this.http.get<Contrat[]>(this.apiURLCon+"/all");
    }
    
    ajouterContrat( as: Contrat):Observable<Contrat>{
      return this.http.post<Contrat>(this.apiURLCon +"/add", as, httpOptions);
      }
    
      supprimerContrat(id : number) {
        const url = `${this.apiURLCon}/delete/${id}`;
        return this.http.delete(url, httpOptions);
        }
    
      updateContrat(doc :Contrat) : Observable<Contrat>
      {
          return this.http.put<Contrat>(this.apiURLCon+"/update", doc, httpOptions);
      }
    
      consulterContrat(id: number): Observable<Contrat> {
          const url = `${this.apiURLCon}/${id}`;
          return this.http.get<Contrat>(url);
          }
    
      
      }



