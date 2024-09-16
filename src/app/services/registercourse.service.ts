import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../studentpage/student';
import { Course } from '../studentpage/Course';
import { RegisterResult } from '../studentpage/registerresult';

@Injectable({
  providedIn: 'root'
})
export class RegistercourseService {
  public courses:Course[]=[];
  public students:Student[]=[];
  public courseName!:string;
 public studentname!: string;
 public grade!:string;
 public result: RegisterResult = new RegisterResult;
  
 

  constructor(private httpclient:HttpClient) { }
  getCourses(){
   
    
      const url="http://localhost:8888/course/fetch";
      this.httpclient.get<Course[]>(url).subscribe((response)=>this.courses=response);
      console.log(this.courses);
      const studenturl="http://localhost:8888/studentpage/fetch";
      this.httpclient.get<Student[]>(studenturl).subscribe((response)=>this.students=response);
    
      this.result.courseName=this.courseName;
      this.result.studdentName=this.studentname;
      this.result.grade=this.grade;
      console.log(this.studentname);
      const url1="http://localhost:8888/result/register";
      this.httpclient.post<RegisterResult>(url1,this.result).subscribe();
      return this.courses,this.students;
  }
  
  
}
