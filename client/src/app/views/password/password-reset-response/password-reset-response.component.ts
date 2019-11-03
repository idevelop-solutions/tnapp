import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { PasswordService } from '../../../Services/password.service';

@Component({
  selector: 'app-password-reset-response',
  templateUrl: './password-reset-response.component.html',
  styleUrls: ['./password-reset-response.component.scss']
})
export class PasswordResetResponseComponent implements OnInit {

  public error=[];
  public form = {
    email : null,
    password : null,
    password_confirmation:null,
    resetToken :null
  }
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private Notify:SnotifyService,
    private password:PasswordService
  ) { 
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  onSubmit(){
   this.password.changePassword(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   )
  }
  handleResponse(data){
    console.log("HERE IS THE RESPONSE:",data);
    
  }

  handleError(error){
    console.log("HERE IS THE RESPONSE:",error);
  }
  
  ngOnInit() {
  }

}
