import { Component } from '@angular/core';
import { MessegeExchange } from '../data.service';

@Component({
  selector: 'app-subscriber-d',
  templateUrl: './subscriber-d.component.html',
  styleUrl: './subscriber-d.component.scss'
})
export class SubscriberDComponent {
  public subscribedMessage!: string;
  constructor(messageExchange: MessegeExchange) {
     messageExchange
     .exchange
     .asObservable
     ().subscribe(
      message=>{
        this.subscribedMessage = message
      });
  }
}
