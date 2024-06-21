import { Injectable, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  apiURL: string = 'http://localhost:8084/users';
  token!: string;
  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];
  public regitredUser: User = new User();
  private jwtHelper = new JwtHelperService();

  constructor(
    private router: Router,
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  setRegistredUser(user: User) { 
    this.regitredUser = user;
  }

  getRegistredUser() {
    return this.regitredUser; 
  }

  logout() {
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token = undefined!;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }

  setLoggedUserFromLocalStorage(login: string) { 
    this.loggedUser = login;
    this.isloggedIn = true;
  }

  login(user: User): Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.apiURL + '/login', user, { observe: 'response' }).pipe(
      tap((res: HttpResponse<any>) => {
        const jwt = res.headers.get('Authorization')!;
        this.saveToken(jwt);
      })
    );
  }

  saveToken(jwt: string): void {
    this.token = jwt;
    localStorage.setItem('jwt', jwt);
    this.decodeJWT(); // décompresse le token pour obtenir les rôles
  }

  getUserName(): string | null {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const decodedToken = this.jwtHelper.decodeToken(jwt);
      return decodedToken.sub;
    }
    return null;
  }

  decodeJWT(): void {
    if (this.token) {
      const decodedToken = this.jwtHelper.decodeToken(this.token);
      this.roles = decodedToken.roles || []; // décompresse le JWT pour obtenir les rôles
    }
  }

  isAdmin(): Boolean {
    if (!this.roles) return false;
    return this.roles.indexOf('ADMIN') >= 0;
  }

  isResponsable(): Boolean {
    if (!this.roles) return false;
    return this.roles.indexOf('RESPONSABLE') >= 0;
  }

  isUser(): boolean {
    return this.roles.includes('USER');
  }

  isUserOnly(): boolean {
    if (!this.roles || !Array.isArray(this.roles)) {
      return false; 
    }
    return this.roles.includes('USER') && !this.roles.includes('ADMIN');
  }

  getToken(): string { 
    return this.token; 
  }

  loadToken() { 
    this.token = localStorage.getItem('jwt')!;
    if (this.token) {
      this.decodeJWT();
    }
  }

  isTokenExpired(): Boolean {
    return this.jwtHelper.isTokenExpired(this.token); 
  }

  registerUser(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.apiURL + '/register', user, { observe: 'response' }).pipe(
      tap((response) => {
        this.setRegistredUser(response.body!);
      })
    );
  }

  validateEmail(code: string): Observable<User> {
    return this.http.get<User>(this.apiURL + '/verifyEmail/' + code);
  }

  getRole(): string {
    if (this.isAdmin()) {
      return 'ADMIN';
    } else if (this.isResponsable()) {
      return 'RESPONSABLE';
    }
    return '';
  }

  isNewlyRegistered(): boolean {
    return this.regitredUser && Object.keys(this.regitredUser).length !== 0;
  }

  ngOnInit(): void { }
}
