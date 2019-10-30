import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-reset-request',
  templateUrl: './password-reset-request.component.html',
  styleUrls: ['./password-reset-request.component.scss']
})
export class PasswordResetRequestComponent implements OnInit {
  public form = {

    email :null
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    

  }

}
