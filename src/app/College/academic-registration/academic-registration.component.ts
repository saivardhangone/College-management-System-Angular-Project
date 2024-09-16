import { Component, OnInit } from '@angular/core';
import { AcademicRegistration } from '../Academic-registartion';
import { Student } from '../../studentpage/student';
import { HttpClient } from '@angular/common/http';
import { StudentDetails } from '../studentDetails';

@Component({
  selector: 'app-academic-registration',
  templateUrl: './academic-registration.component.html',
  styleUrl: './academic-registration.component.scss'
})
export class AcademicRegistrationComponent implements OnInit {

  public academic=new AcademicRegistration();
  public students:StudentDetails[]=[];
  public academicYear!:number;
  public semester!: number;
  public studentId!: number;
constructor(public httpClient:HttpClient){}
  ngOnInit(): void {
    const url="http://localhost:8888/college/student/";
    this.httpClient.get<StudentDetails[]>(url).subscribe((response)=>this.students=response);
    console.log(this.students);
   
  }
  public register():void{
    this.academic.academicYear=this.academicYear;
    this.academic.semester=this.semester;
    this.academic.studentId=this.studentId;
    const url="http://localhost:8888/college/academics/";
    this.httpClient.post<AcademicRegistration>(url,this.academic).subscribe();
    console.log("sucessfully registered")
  }



}
