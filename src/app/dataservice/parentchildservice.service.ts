import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentchildserviceService   {

  constructor() { }
 
  message:string="";
  setMessage(data: string):void  {
    this.message=data;
  }
  getMessage():string{
    console.log(this.message)
    return this.message;
  }
}
