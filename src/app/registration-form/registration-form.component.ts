import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent {

  
  public message: string = '';
  @Output() updateItemEvent = new EventEmitter<string>();

  public updateChanges(): void{
    this.message = 'Modifying';
    console.log('Data is being modifying....');
    this.updateItemEvent.emit(this.message);
  }
  public updateSaveChanges(): void{
    this.message = 'Saved';
    this.updateItemEvent.emit(this.message);
  }
}
