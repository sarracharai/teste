import { Commentaire } from "./commentaire.model";


export class Publication {
    idPublication!: number;
    publication!: string;
    dateAjout!: Date;
    commentaires?: Commentaire[];
    }