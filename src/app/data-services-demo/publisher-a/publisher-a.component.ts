import { Component } from '@angular/core';
import { MessegeExchange } from '../data.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-publisher-a',
  templateUrl: './publisher-a.component.html',
  styleUrl: './publisher-a.component.scss'
})
export class PublisherAComponent {
  public message!: string;// ngmodel binding
  public messagePulisher: any;
  constructor(messageExchange: MessegeExchange){
    this.messagePulisher = messageExchange.exchange;
  }
  public publishMessage(): void{
    this.messagePulisher.next(this.message);// publish
  }
}
