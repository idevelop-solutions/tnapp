import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../../Services/register.service';

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


  constructor(private registerService: RegisterService) { }

  onSubmit() {
    this.registerService.register(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error){

    this.error = error.error.errors; 
  }

}
