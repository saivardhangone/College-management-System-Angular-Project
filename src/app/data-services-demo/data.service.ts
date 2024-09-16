import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class MessegeExchange{
    public message!: string;
    public exchange= new BehaviorSubject(this.message);
}