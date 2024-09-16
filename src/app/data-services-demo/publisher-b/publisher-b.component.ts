import { Component } from '@angular/core';
import { MessegeExchange } from '../data.service';

@Component({
  selector: 'app-publisher-b',
  templateUrl: './publisher-b.component.html',
  styleUrl: './publisher-b.component.scss'
})
export class PublisherBComponent {
  public message!: string;
  public messagePulisher: any;
  constructor(messageExchange: MessegeExchange){
    this.messagePulisher = messageExchange.exchange;
  }
  public publishMessage(): void{

    this.messagePulisher.next(this.message);
  }
}
