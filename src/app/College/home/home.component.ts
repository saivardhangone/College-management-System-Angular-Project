import { Component } from '@angular/core';
// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // imports:[NgbDropdownModule],
  styleUrl: './home.component.scss',
 
})
export class HomeComponent {
  hidden:boolean=false;
sliding() {
if(this.hidden==false){
  this.hidden=true;

}
else{
  this.hidden=false;
}
}
  

hide() :void{
  if(this.hidden==true){
    this.hidden=false
  }

}
    



}
