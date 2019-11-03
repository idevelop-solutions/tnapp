import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginService } from "../../Services/login.service";
import { TokenService } from "../../Services/token.service";
import { Route, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { SnotifyService } from 'ng-snotify';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  public form = {

    email: null,
    password: null
  }

  public error = null;


  constructor(
	  private loginService: LoginService,
	  private token: TokenService,
	  private router:Router,
    private auth:AuthService,
    private notify:SnotifyService) { }

  onSubmit() {
    this.notify.info('Waiting...','login');
    this.loginService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }

}
