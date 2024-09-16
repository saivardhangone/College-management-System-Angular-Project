import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../EmployeeDetails';

@Component({
  selector: 'app-faculty-registration',
  templateUrl: './faculty-registration.component.html',
  styleUrl: './faculty-registration.component.scss'
})
export class FacultyRegistrationComponent implements OnInit {
  public employees:EmployeeDetails[]=[];

  constructor(public httpClient:HttpClient){}
  ngOnInit(): void {
    const url="http://localhost:8888/college/employee/";
    this.httpClient.get<EmployeeDetails[]>(url).subscribe((response)=>this.employees=response);
    console.log(this.employees);
  }

}
