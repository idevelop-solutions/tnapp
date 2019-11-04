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
    this.Notify.info('Changing your password!','Password');
   this.password.changePassword(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   )
  }
  handleResponse(data){

    let _router = this.router;
    this.Notify.confirm('Done!, Now login with new Password', {
      buttons:[
        {text: 'Okay', 
        action: toster =>{
           _router.navigateByUrl('/'),
           this.Notify.remove(toster.id)
          }
      },
      ]
    })
  }

  handleError(error){
    this.error = error.error.errors;
  }


  // handleResponse(data){
  //   console.log("HERE IS THE RESPONSE:",data);
  //   this.router.navigateByUrl('/');
  // }

  // handleError(error){
  // }

  ngOnInit() {

  }

}
