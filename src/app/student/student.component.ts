import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  public updateStatus: string = 'dummy data';

  public recieveChildMessageEvent(childMessage : string){
    console.log('message recieved in parent and message is : ', childMessage);
    this.updateStatus = childMessage;

  }
}
