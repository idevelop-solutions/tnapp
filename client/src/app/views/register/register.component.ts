import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../../Services/register.service';
import { TokenService } from '../../Services/token.service';
import { Router } from '@angular/router';

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


  constructor(private registerService: RegisterService, private token:TokenService, private router:Router) { }

  onSubmit() {
    this.registerService.register(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/dashboard');
    }

  handleError(error){

    this.error = error.error.errors; 
  }

}
