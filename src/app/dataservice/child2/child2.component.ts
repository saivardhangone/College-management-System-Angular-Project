import { Component, OnInit } from '@angular/core';
import { ParentchildserviceService } from '../parentchildservice.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component implements OnInit{
  constructor(public service:ParentchildserviceService){}
  message!:string;

  ngOnInit(): void {
    this.message=this.service.getMessage()
    console.log(this.message)
    
  }

}
