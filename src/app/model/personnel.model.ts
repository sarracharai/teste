import { Conge } from './conge.model';
import { Departement } from './departement.model';
import { Pret } from './pret.model';
export class Personnel {
    idPersonnel! : number;
	nomPersonnel! : String;
	prenomPersonnel! : String;
	dateNaissance! : Date;
	email! : String;
	numTelephone! : number;
	adresse! : String;
	fonction! :String ;
	departement!: Departement;
	conge!:Conge;
	pret!:Pret;
}

