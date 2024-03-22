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

const routes: Routes = [

  {path: "personnel", component : PersonnelComponent },
  {path: "addPersonnel", component : AddPersonnelComponent },
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
  {path: "listePret/:idPret", component: ListepretComponent},
  {path: "listePret", component: ListepretComponent},
  {path: "addPret", component: AddPretComponent},
  {path: "updatePret/:idPret", component: UpdatePretComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
