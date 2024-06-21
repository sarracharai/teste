import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private jwtHelper = new JwtHelperService();

  constructor() {}

  // Méthode pour sauvegarder des données dans le localStorage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Méthode pour récupérer des données du localStorage
  getItem(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  // Méthode pour supprimer une clé du localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Méthode pour sauvegarder le token JWT dans le localStorage
  saveToken(jwt: string): void {
    this.setItem('jwt', jwt);
  }

  // Méthode pour récupérer le token JWT du localStorage
  getToken(): string | null {
    return this.getItem('jwt');
  }

  // Méthode pour récupérer le nom d'utilisateur à partir du JWT
  getUserName(): string | null {
    const jwt = this.getToken();
    if (jwt) {
      const decodedToken = this.jwtHelper.decodeToken(jwt);
      return decodedToken.sub;
    }
    return null;
  }

  // Autres méthodes pour gérer les données utilisateur, si nécessaire

}
