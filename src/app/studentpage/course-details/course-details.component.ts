;import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Course } from '../Course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {
  public courses:Course[]=[];
  public deletedcoursename:any;
  //public response:any;
   public constructor(public httpclient:HttpClient){}
  public getcourses():void{
    const url="http://localhost:8888/course/fetch";
    this.httpclient.get<Course[]>(url).subscribe((response)=>this.courses=response);
    console.log(this.courses);
  }
  public deletecourse(coursename:string):void{
    const url="http://localhost:8888/course/delete/"+coursename;
    this.httpclient.delete<Course>(url).subscribe((resp)=>this.deletedcoursename=resp);
    console.log(this.deletedcoursename);


    }

    
  

}
