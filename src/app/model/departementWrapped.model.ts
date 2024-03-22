import { Departement } from './departement.model';

  export class DepartementWrapper{
      _embedded!: { departements: Departement[]};
       }
