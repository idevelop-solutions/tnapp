import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8000/api/';
  constructor(private http:HttpClient) { }

  login (data){
    return this.http.post(`${this.baseUrl}login`, data);
  }
}
