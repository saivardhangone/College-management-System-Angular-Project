import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from '../student';
import { Course } from '../Course';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrl: './addcourse.component.scss'
})
export class AddcourseComponent {
public courseName !:string;

public courseId!: number;
public response:any;
public course=new Course();




constructor( public http:HttpClient){}
public courseregistered():void{
  
  
  this.course.courseName=this.courseName;
  this.course.courseId=this.courseId;
  
  
  console.log(this.course.courseName);
  const url="http://localhost:8888/course/register";
  this.http.post<Course>(url,this.course).subscribe((resp)=>this.response);
  console.log(Student);
  

}

}
