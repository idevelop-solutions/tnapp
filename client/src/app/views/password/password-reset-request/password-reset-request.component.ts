import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../../../Services/password.service';

@Component({
  selector: 'app-password-reset-request',
  templateUrl: './password-reset-request.component.html',
  styleUrls: ['./password-reset-request.component.scss']
})
export class PasswordResetRequestComponent implements OnInit {
  public form = {
    email :null
  }
  constructor(private password:PasswordService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.password.PasswordResetRequest(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    ){}
  }

  handleResponse(data){
    console.log("This is response:",data);
  }

  handleError(error){
    console.log("This is response:",error);
  }

}
