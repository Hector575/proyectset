import { Injectable } from '@angular/core';
import { SocketService } from '@app/socket.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  notifications;
  constructor(private socketSvc: SocketService) {
    this.notifications = this.socketSvc.connect()
      .pipe(map((response: any) => {
        return response;
      })) as Subject<any>;
  }


  sendNotifications(data) {
    this.notifications.next(data);
  }
}
