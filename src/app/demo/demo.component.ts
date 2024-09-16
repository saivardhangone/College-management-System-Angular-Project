import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
isDisabled: boolean=false;
myfun():void{
this.isDisabled=true;
}
mycol:string="lightblue";
isHighlighted: boolean=true;
dynamiccolor:string="orange";
message:String="hello sandeep";
numbers:any=[10,20,30,40];
handlemouseenter() {
console.log("mouse entered");
}





}
