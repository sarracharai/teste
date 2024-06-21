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
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { PersonnelDataComponent } from './personnel-data/personnel-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonnelCongeDataComponent } from './personnel-conge-data/personnel-conge-data.component';
import { PersonnelPretDataComponent } from './personnel-pret-data/personnel-pret-data.component';
import { PersonnelContratDataComponent } from './personnel-contrat-data/personnel-contrat-data.component';
import { PersonnelAssiduiteDataComponent } from './personnel-assiduite-data/personnel-assiduite-data.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { NotificationComponent } from './notification/notification.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { UpdateNotificationComponent } from './update-notification/update-notification.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { EditProfilRespComponent } from './edit-profil-resp/edit-profil-resp.component';
import { AdminComponent } from './admin/admin.component';
import { EditProfilAdminComponent } from './edit-profil-admin/edit-profil-admin.component';
import { PersonnelDocDataComponent } from './personnel-doc-data/personnel-doc-data.component';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { PublicationComponent } from './publication/publication.component';
import { UsersComponent } from './users/users.component';
import { NewProfilComponent } from './new-profil/new-profil.component';
import { NewProfilRhComponent } from './new-profil-rh/new-profil-rh.component';
import { ProfilAdministrateurComponent } from './profil-administrateur/profil-administrateur.component';
import {  UpdateAdminComponent } from './update-admin/update-admin.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    NavbarComponent,
    UpdateDepartementComponent,
    RegisterComponent,
    VerifEmailComponent,
    PersonnelDataComponent,
    DashboardComponent,
    PersonnelCongeDataComponent,
    PersonnelPretDataComponent,
    PersonnelContratDataComponent,
    PersonnelAssiduiteDataComponent,
    ResponsableComponent,
    NotificationComponent,
    AddNotificationComponent,
    UpdateNotificationComponent,
    EditProfilComponent,
    EditProfilRespComponent,
    AdminComponent,
    EditProfilAdminComponent,
    PersonnelDocDataComponent,
    AddPublicationComponent,
    PublicationComponent,
    UsersComponent,
    NewProfilComponent,
    NewProfilRhComponent,
    ProfilAdministrateurComponent,
    UpdateAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
