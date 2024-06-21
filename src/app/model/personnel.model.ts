import { Conge } from './conge.model';
import { Departement } from './departement.model';
import { Pret } from './pret.model';
import { Utilisateur } from './utilisateur.model';
export class Personnel extends Utilisateur{
    
	numCin! : String;
	username! : String; 
	fonction! :String ;
	sexe! :String;
	departement!: Departement;
	conge!:Conge;
	pret!:Pret;
}

