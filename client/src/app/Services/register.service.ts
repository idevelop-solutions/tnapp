import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8000/api/';
  constructor(private http:HttpClient) { }

  register(data){
    return this.http.post(`${this.baseUrl}register`, data);
  }
}
