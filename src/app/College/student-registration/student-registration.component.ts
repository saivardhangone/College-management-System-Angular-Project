import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Branch } from '../Branches';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Student } from '../Student';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.scss',

})
export class StudentRegistrationComponent implements OnInit {

  
  public branches: Branch[] = [];
  public firstName !: string;
  public familyName !: string;
  public gender!: string;
  public mobileNumber!: string;
  public email!: string;
  public dateOfBirth!:Date;
  public address!: string;
  public branchId!:number;
  public student=new Student();


  constructor(public httpclient: HttpClient) { }
  ngOnInit(): void {

    const url = "http://localhost:8888/college/branch/";
    this.httpclient.get<Branch[]>(url).subscribe((response: any) => { this.branches = response });
    console.log(this.branches);
    // this.branches=this.searchTerms.pipe(debounceTime(200),distinctUntilChanged())
  }
  onselected(value:number):void{
    this.branchId=value;
}

public  register():void {
  this.student.firstName=this.firstName;
  this.student.familyName=this.familyName;
  this.student.gender=this.gender;
  this.student.mobileNumber=this.mobileNumber;
  this.student.email=this.email;
  this.student.dob=this.dateOfBirth;
  this.student.address=this.address;
  this.student.branchId=this.branchId;
  console.log(this.branchId);
  console.log(this.dateOfBirth);
  const url="http://localhost:8888/college/student/";
  this.httpclient.post<Student>(url,this.student).subscribe();
  console.log("registered");
}
  
}

