import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private baseUrl = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  PasswordResetRequest (data){
    return this.http.post(`${this.baseUrl}PasswordResetRequest`, data);
  }
}