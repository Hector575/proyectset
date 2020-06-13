import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket;

  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    this.socket = io('http://localhost:5000');

    const observable = new Observable(observe => {
      this.socket.on('notification', (data) => {
        observe.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    const observer = {
      next: (data: any) => {
        this.socket.emit(data);
      }
    };

    return Rx.Subject.create(observer, observable);
  }
}
