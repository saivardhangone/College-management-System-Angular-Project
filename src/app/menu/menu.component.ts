import { AfterViewInit, Component, Input, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  @Input() updateMessageFromParent: string='';

  public registrationFormUpdateStatus: string = '';
  
  ngOnInit(): void {
    console.log('registrationFormUpdateStatus : ', this.registrationFormUpdateStatus);
      console.log('updateMessageFromParent : ', this.updateMessageFromParent);
      this.registrationFormUpdateStatus= this.updateMessageFromParent;
  }
}
