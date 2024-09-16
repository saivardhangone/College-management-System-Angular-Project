import { Component, Input, OnInit } from '@angular/core';
import { Login } from '../models/login';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrl: './display-form.component.scss'
})
export class DisplayFormComponent  implements OnInit{
  @Input()
  public loginInformationFromParent!: Login;
  
  ngOnInit(): void {
    
  }
}
