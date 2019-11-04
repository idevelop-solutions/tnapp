import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../../../Services/password.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-password-reset-request',
  templateUrl: './password-reset-request.component.html',
  styleUrls: ['./password-reset-request.component.scss']
})
export class PasswordResetRequestComponent implements OnInit {
  public form = {
    email: null
  };
  public error = [];

  constructor(private password: PasswordService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.notify.info('Wait...' ,{timeout:3000})
    this.password.PasswordResetRequest(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(res) {
    this.notify.success(res.data,{timeout:0});
    this.form.email = null;
    console.log("This is response:", res);
  }

  handleError(error) {
    this.notify.error(error.error.error);
    this.error = error.error.error;
  }

}
