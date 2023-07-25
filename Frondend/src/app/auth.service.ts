import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './data-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: boolean = false;
  baseUrl: string = "https://supalogic.azurewebsites.net/";

  constructor(private http: HttpClient) {}

  login(user: User) {
    return this.http.post<String>(`${this.baseUrl}api/v1/supalogic/login`, user);
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }
}
