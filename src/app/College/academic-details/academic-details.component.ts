import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AcademicDetails } from '../AcademicDetails';

@Component({
  selector: 'app-academic-details',
  templateUrl: './academic-details.component.html',
  styleUrl: './academic-details.component.scss'
})
export class AcademicDetailsComponent implements OnInit {
  public academics:AcademicDetails[]=[];
  constructor(public httpClient:HttpClient){
  }
  ngOnInit(): void {
    const url="http://localhost:8888/college/academics/";
    this.httpClient.get<AcademicDetails[]>(url).subscribe((response)=>this.academics= response)
    console.log(this.academics)
  }


}
