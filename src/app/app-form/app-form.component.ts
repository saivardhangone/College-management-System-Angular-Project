import { Component, EventEmitter, Output } from '@angular/core';
import { Login } from '../models/login';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html', 
  styleUrl: './app-form.component.scss'
})
export class AppFormComponent {
  public logingDetails: Login = new Login();
  public loginResponse!: string;
  @Output()
  public emitLoginDetails= new EventEmitter<Login>();
  public verifyLogin():void{
    console.log('user name : ', this.logingDetails.mobileNumber);
    console.log('password is : ', this.logingDetails.password);
      if(this.logingDetails.mobileNumber == 12345 && this.logingDetails.password == 'password'){
          this.loginResponse = 'Success';
      }else{
        this.loginResponse = 'Fail';
      }
      console.log('Login details are : ', this.loginResponse);
      this.emitLoginDetails.emit(this.logingDetails);
  }

}
