import { Component, OnInit } from '@angular/core';
import { faculty } from '../Faculty';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrl: './faculty-details.component.scss'
})
export class FacultyDetailsComponent implements OnInit{
  public faculties:faculty[]=[];
  constructor(public httpclient:HttpClient){}
  ngOnInit(): void {
    const url="http://localhost:8888/college/faculty/";
    this.httpclient.get<faculty[]>(url).subscribe((response)=>this.faculties=response);
    console.log(this.faculties);
    
  }

}
