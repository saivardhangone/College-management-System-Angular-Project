import { Component } from '@angular/core';
import { Login } from '../models/login';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public loginObject: Login = new Login();
  constructor(){
    this.loginObject.mobileNumber=0;
    this.loginObject.password='';
  }
  public readLoginDataFromAppForm(loginArgument:Login){
    this.loginObject=loginArgument;
  }

}
