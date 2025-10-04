import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Constants } from '../config/constants';
import { User, LoginResponse } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private constants: Constants) {}

  // login
  public async login(email: string, password: string): Promise<LoginResponse> {
    const url = `${this.constants.API_ENDPOINT}/customers/login`;
    const response = await lastValueFrom(this.http.post<LoginResponse>(url, { email, password }));

    if (response && response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }

    return response;
  }

  // register
  public async register(formData: FormData): Promise<any> {
    const url = `${this.constants.API_ENDPOINT}/customers/register`;
    const response = await lastValueFrom(this.http.post(url, formData));
    return response;
  }

  // logout
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
