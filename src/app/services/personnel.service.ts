import { Departement } from '../model/departement.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personnel } from '../model/personnel.model';
import { Observable } from 'rxjs';
import { Conge } from '../model/conge.model';
import { DepartementWrapper } from '../model/departementWrapped.model';
import { Pret } from '../model/pret.model';



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
  apiURLP="http://localhost:8083/ressourcesH/api/pret"


  personnels! : Personnel[];  //un tableau de Personnel
  

  constructor(private http : HttpClient) { 

  }

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


}

