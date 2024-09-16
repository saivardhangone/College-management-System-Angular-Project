import { Component } from '@angular/core';
import { MessegeExchange } from '../data.service';

@Component({
  selector: 'app-subscriber-c',
  templateUrl: './subscriber-c.component.html',
  styleUrl: './subscriber-c.component.scss'
})
export class SubscriberCComponent {

  public subscribedMessage!: string;

  constructor(
    messageExchange: MessegeExchange) {
    messageExchange
      .exchange
      .asObservable()
      .subscribe(
        recievedMessage => {
          this.subscribedMessage = recievedMessage


          
        });
  }
}
