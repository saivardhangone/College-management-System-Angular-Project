import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../EmployeeDetails';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent implements OnInit {
  public employees:EmployeeDetails[]=[];
  constructor(public httpclient:HttpClient){}
  ngOnInit(): void {
    const url="http://localhost:8888/college/employee/";
    this.httpclient.get<EmployeeDetails[]>(url).subscribe((response)=>this.employees=response);
    console.log(this.employees);
  }
 

    
}
