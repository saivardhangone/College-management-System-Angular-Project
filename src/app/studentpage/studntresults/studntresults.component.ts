import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { studentresult } from '../studentresult';

@Component({
  selector: 'app-studntresults',
  templateUrl: './studntresults.component.html',
  styleUrl: './studntresults.component.scss'
})
export class StudntresultsComponent {
  public results:studentresult[]=[];
  constructor( public httpclient:HttpClient){}

 public result():void {
  const url="http://localhost:8888/result/fetch";
  this.httpclient.get<studentresult[]>(url).subscribe((response)=>this.results=response);
  console.log(this.results);


}


}
