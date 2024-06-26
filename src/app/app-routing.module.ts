import { PersonnelContratDataComponent } from './personnel-contrat-data/personnel-contrat-data.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnelComponent } from './personnel/personnel.component';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';
import { UpdatePersonnelComponent } from './update-personnel/update-personnel.component';
import { ProfilPersonnelComponent } from './profil-personnel/profil-personnel.component';
import { RechercheParDepartementComponent } from './recherche-par-departement/recherche-par-departement.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeDepartementsComponent } from './liste-departements/liste-departements.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { ListecongeComponent } from './listeconge/listeconge.component';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { UpdateCongeComponent } from './update-conge/update-conge.component';
import { ListepretComponent } from './listepret/listepret.component';
import { AddPretComponent } from './add-pret/add-pret.component';
import { UpdatePretComponent } from './update-pret/update-pret.component';
import { AssiduitesComponent } from './assiduites/assiduites.component';
import { UpdateAssiduiteComponent } from './update-assiduite/update-assiduite.component';
import { AddAssiduiteComponent } from './add-assiduite/add-assiduite.component';
import { ListeAbsencesComponent } from './liste-absences/liste-absences.component';
import { UpdateAbsenceComponent } from './update-absence/update-absence.component';
import { DocumentsComponent } from './documents/documents.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { ContratComponent } from './contrat/contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { AddAbsenceComponent } from './add-absence/add-absence.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
//import { PersonnelGuard } from './guard/personnel.guard';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { PersonnelDataComponent } from './personnel-data/personnel-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonnelCongeDataComponent } from './personnel-conge-data/personnel-conge-data.component';
import { PersonnelPretDataComponent } from './personnel-pret-data/personnel-pret-data.component';
import { PersonnelAssiduiteDataComponent } from './personnel-assiduite-data/personnel-assiduite-data.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { NotificationComponent } from './notification/notification.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { EditProfilRespComponent } from './edit-profil-resp/edit-profil-resp.component';
import { AdminComponent } from './admin/admin.component';
import { EditProfilAdminComponent } from './edit-profil-admin/edit-profil-admin.component';
import { PersonnelDocDataComponent } from './personnel-doc-data/personnel-doc-data.component';
import { PublicationComponent } from './publication/publication.component';
import { AddPublicationComponent } from './add-publication/add-publication.component';
import { UsersComponent } from './users/users.component';
import { NewProfilComponent } from './new-profil/new-profil.component';
import { NewProfilRhComponent } from './new-profil-rh/new-profil-rh.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { ProfilAdministrateurComponent } from './profil-administrateur/profil-administrateur.component';

const routes: Routes = [
  
  {path: "users", component : UsersComponent},
  {path: "personnel", component : PersonnelComponent },
  {path: "addPersonnel", component : AddPersonnelComponent /*, canActivate:[PersonnelGuard] */ },
  {path: "updatePersonnel/:idPersonnel", component : UpdatePersonnelComponent },
  {path: "profil/:idPersonnel", component: ProfilPersonnelComponent },
  {path: "profil", component: ProfilPersonnelComponent },
  {path: "rechercheParDepartement", component : RechercheParDepartementComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeDep", component : ListeDepartementsComponent},
  {path: "addDep", component: AddDepartementComponent},
  {path: "listeConge", component: ListecongeComponent},
  {path: "listeConge/:idConge", component: ListecongeComponent},
  {path: "addConge", component: AddCongeComponent},
  {path: "updateConge/:idConge", component: UpdateCongeComponent},
  {path: "updateDepartement/:idDep", component: UpdateDepartementComponent},
  {path: "listePret/:idPret", component: ListepretComponent},
  {path: "listePret", component: ListepretComponent},
  {path: "addPret", component: AddPretComponent},
  {path: "updatePret/:idPret", component: UpdatePretComponent},
  {path: "sidebar", component: SidebarComponent},
  {path: "departement", component: AddDepartementComponent},
  {path: "assiduites", component : AssiduitesComponent},
  {path: "addAssiduite", component : AddAssiduiteComponent},
  {path: "updateAssiduite/:id", component :UpdateAssiduiteComponent},
  {path: "listeAbsences", component :ListeAbsencesComponent},
  {path: "updateAbsence", component :UpdateAbsenceComponent},
  {path: "documents", component :DocumentsComponent},
  {path: "addDocument", component : AddDocumentComponent},
  {path: "updateDocument/:id", component :UpdateDocumentComponent},
  {path: "contrats", component :ContratComponent},
  {path: "addContrat", component : AddContratComponent},
  {path: "updateContrat/:id", component :UpdateContratComponent},
  {path: "addAbsence", component: AddAbsenceComponent},
  {path: "addConge", component: AddCongeComponent},
  {path: "updateAbsence/:id", component :UpdateAbsenceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path:'register',component:RegisterComponent},
  {path:'verifEmail', component: VerifEmailComponent },
  {path:'user-data' , component: PersonnelDataComponent},
  {path:'userConge-data' , component: PersonnelCongeDataComponent},
  {path:'userPret-data' , component: PersonnelPretDataComponent},
  {path:'userDoc-data' , component: PersonnelDocDataComponent},
  {path:'userContrat-data' , component: PersonnelContratDataComponent},
  {path:'userAssiduite-data' , component: PersonnelAssiduiteDataComponent},
  {path:'dashbord' , component: DashboardComponent},
  {path:'editProfil' , component: EditProfilComponent},
  {path:'editProfilResp', component:EditProfilRespComponent},
  {path:'editProfilAdmin' , component: EditProfilAdminComponent},
  {path:'notification', component: NotificationComponent},
  {path:"responsable", component: ResponsableComponent},
  {path: "admin", component: AdminComponent},
  {path: "profilAdmin/:idAdmin", component:ProfilAdministrateurComponent},
  {path:'updateAdmin/:id' , component: UpdateAdminComponent},
  {path: 'updateNotification/:id', component: NotificationComponent },
  {path: "addNotification", component : AddNotificationComponent},
  {path: 'publication', component: PublicationComponent},
  {path: "addPublication", component : AddPublicationComponent},
  // {path: "newProfil",component : NewProfilComponent},
  // {path:'editProfilAdmin/:id' , component: EditProfilAdminComponent},
  // {path: "newProfilRh",component :NewProfilRhComponent },
  {path: "", redirectTo: "login", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
