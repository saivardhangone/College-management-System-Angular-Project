import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Course } from '../Course';
import { Student } from '../student';
import { RegisterResult, Result } from '../registerresult';

@Component({
  selector: 'app-registerresult',
  templateUrl: './registerresult.component.html',
  styleUrl: './registerresult.component.scss'
})
export class RegisterresultComponent {



  public courses:Course[]=[];
  public students:Student[]=[];
  public courseName!:string;
 public studentname!:string;
 public studentId!:number;
 public grade!:string;
 public result: RegisterResult = new RegisterResult;
 public stuId!:number;



  constructor( public httpclient:HttpClient){}
  public getCourses():void{
    const url="http://localhost:8888/course/fetch";
    this.httpclient.get<Course[]>(url).subscribe((response)=>this.courses=response);
    //console.log(this.courses);
    const studenturl="http://localhost:8888/studentpage/fetch";
    this.httpclient.get<Student[]>(studenturl).subscribe((response)=>this.students=response);
    
  
  
}


  
 
  
  public registerStudentResult():void{
    this.result.id = new Result();
    
    this.result.id.courseName=this.courseName;
    this.result.id.stuId=this.studentId;
    const studentName= this.students
          .filter(student=> student.id == this.studentId)
          .map(s=>s.firstName + " "+ s.lastName)
          .toString();
    this.result.stuName=studentName;
    this.result.result=this.grade;
    
    console.log(this.result);
    const url="http://localhost:8888/result/register";
    this.httpclient.post<RegisterResult>(url,this.result).subscribe();
    

  }

  
  

}
