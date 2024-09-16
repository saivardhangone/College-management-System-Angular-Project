import { Component } from '@angular/core';
import { Student } from '../student';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.scss'
})
export class AddstudentComponent {
  

  public student = new Student();
  public registerid !: number;
  public firstname!: string;
  public lastname!: string;
  public dateofbirth!: Date;
  public emailadress!: string;
  constructor( public httpclient:HttpClient){

  }
  public registerdetails(): void {
    this.student.id = this.registerid;
    this.student.firstName = this.firstname;
    this.student.lastName = this.lastname;
    this.student.date = this.dateofbirth;
    this.student.email = this.emailadress;
    console.log(this.dateofbirth);
    const  url="http://localhost:8888/studentpage/register";
    console.log("name is:",this.student.firstName);
    this.httpclient.post<Student>(url,this.student).subscribe();
    console.log(Student);

 }
   

}
