import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8000/api/';
  constructor(private http:HttpClient, private token:TokenService) { }

  login (data){
    return this.http.post(`${this.baseUrl}login`, data);
  }
}
