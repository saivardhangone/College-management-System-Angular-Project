import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrl: './http-example.component.scss'
})
export class HttpExampleComponent {
  serviceResponse: string='';
  name!: string;

  constructor(public httpClient: HttpClient){

  }

  getMessageFromHttpService() {
    console.log("input value is : ", this.name);
    const url = "http://localhost:8888/greeting/?name="+this.name;
    var headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    console.log('prepared url is : ', url);
    this.httpClient.post<string>(url, null, { headers, responseType: 'text' as 'json' })
    .subscribe((resp)=>{
      console.log("service response is : "+ resp);
      this.serviceResponse = resp;
    });
  }
}
