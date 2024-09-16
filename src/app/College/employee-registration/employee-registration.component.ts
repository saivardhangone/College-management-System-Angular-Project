import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from '../Employee';
import { DatePipe } from '@angular/common';
import { Data } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.scss'
})
export class EmployeeRegistrationComponent {
  public Employee=new Employee();
  public firstName!: string;
  public familyName!: string;
  public gender!: string;
  public mobileNumber!: string;
  public dateOfBirth!: Date;
  public email!: string;
  public address!: string;
  constructor(public httpclient:HttpClient){

  }
  public register(): void {
    this.Employee.firstName=this.firstName;
    this.Employee.familyName=this.familyName;
    this.Employee.gender=this.gender;
    this.Employee.mobileNumber=this.mobileNumber;
    this.Employee.dob=this.dateOfBirth;
    this.Employee.email=this.email;
    this.Employee.address=this.address;
    console.log(this.Employee.gender);
    console.log(this.Employee.dob);

    const url="http://localhost:8888/college/employee/";
    this.httpclient.post<Employee>(url,this.Employee).subscribe();
    console.log("successful")

  }




}
