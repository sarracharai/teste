import { Publication } from "./publication.model";

export class Commentaire{
    idCommentaire!: number;
    commentaire!: string;
    dateAjout!: Date;
    publication?: Publication;
    }