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

  constructor(private password: PasswordService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.password.PasswordResetRequest(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(res) {
    console.log("This is response:", res);
  }

  handleError(error) {
    this.notify.error(error.error.errors);
  }

}
