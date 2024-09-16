import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParentchildserviceService } from '../parentchildservice.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent implements OnInit {
  constructor(public service :ParentchildserviceService) {
    
  }
  message="Hi this is child Component";
  ngOnInit(): void {
    this.service.setMessage(this.message);
    
  }
  // @Input() data!:string
  // @Output() event=new EventEmitter<string>()
  // parentmessage!:string;
  //  public message():void{
  // console.log( this.parentmessage);
  // }




}
