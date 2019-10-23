import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  public form = {
    name:null,
    email: null,
    password: null,
    password_confirmation:null
  }

  public error =[];


  constructor(private http: HttpClient) { }



  onSubmit() {  
    this.http.post('http://localhost:8000/api/register', this.form).subscribe(

      data => console.log(data),
      error => this.handleError(error)
    );

  }

  handleError(error){

    this.error = error.error.errors; 
  }

}
