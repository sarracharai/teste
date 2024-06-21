import { Absence } from "./absence.model";
import { Personnel } from "./personnel.model";
import { Pret } from "./pret.model";
export class Notification {
    idNotification! : number;
    etat! : string;
    dateDemande!:Date;
    dateDebut!:Date;
    dateFin!:Date;
    periode!: string;
    montant!:number;
    dateRemise!:Date;
    type! : string;
    excuse!:String;
    personnel!:Personnel;
    absence!:Absence;
    username! : String;
    lu! : boolean;
    pret: Pret = new Pret();
    
}