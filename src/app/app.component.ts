import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
imports:[RouterOutlet]
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice';
  
}
