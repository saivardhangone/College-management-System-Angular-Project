import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentDetails } from '../studentDetails';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent implements OnInit {
  public students:StudentDetails[]=[];
  constructor(public httpClient:HttpClient){}
  ngOnInit(): void {
    const url="http://localhost:8888/college/student/";
    this.httpClient.get<StudentDetails[]>(url).subscribe((response)=>this.students=response);
    console.log(this.students);
    
  }
 

}
