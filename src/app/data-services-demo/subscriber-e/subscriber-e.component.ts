import { Component } from '@angular/core';
import { MessegeExchange } from '../data.service';

@Component({
  selector: 'app-subscriber-e',
  templateUrl: './subscriber-e.component.html',
  styleUrl: './subscriber-e.component.scss'
})
export class SubscriberEComponent {
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
