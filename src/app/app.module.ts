import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UpdatePretComponent } from './update-pret/update-pret.component';
import { ListepretComponent } from './listepret/listepret.component';
import { AddPretComponent } from './add-pret/add-pret.component';
import { ListecongeComponent } from './listeconge/listeconge.component';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { UpdateCongeComponent } from './update-conge/update-conge.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ListeDepartementsComponent } from './liste-departements/liste-departements.component';
import { ProfilPersonnelComponent } from './profil-personnel/profil-personnel.component';
import { UpdatePersonnelComponent } from './update-personnel/update-personnel.component';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParDepartementComponent } from './recherche-par-departement/recherche-par-departement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddAssiduiteComponent } from './add-assiduite/add-assiduite.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { AssiduitesComponent } from './assiduites/assiduites.component';
import { ContratComponent } from './contrat/contrat.component';
import { DocumentsComponent } from './documents/documents.component';
import { ListeAbsencesComponent } from './liste-absences/liste-absences.component';
import { UpdateAbsenceComponent } from './update-absence/update-absence.component';
import { UpdateAssiduiteComponent } from './update-assiduite/update-assiduite.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { AddAbsenceComponent } from './add-absence/add-absence.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnelComponent,
    SidebarComponent,
    UpdatePretComponent,
    ListepretComponent,
    AddPretComponent,
    ListecongeComponent,
    AddCongeComponent,
    UpdateCongeComponent,
    AddDepartementComponent,
    ListeDepartementsComponent,
    ProfilPersonnelComponent,
    UpdatePersonnelComponent,
    AddPersonnelComponent,
    RechercheParNomComponent,
    RechercheParDepartementComponent,
    AddAssiduiteComponent,
    AddContratComponent,
    AddDocumentComponent,
    AssiduitesComponent,
    ContratComponent,
    DocumentsComponent,
    ListeAbsencesComponent,
    UpdateAbsenceComponent,
    UpdateAssiduiteComponent,
    UpdateContratComponent,
    UpdateDocumentComponent,
    AddAbsenceComponent,
    LoginComponent,
    ForbiddenComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
