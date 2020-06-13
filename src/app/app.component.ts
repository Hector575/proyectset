import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './auth/services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private wsService: WebsocketService
  ) { }

  ngOnInit() {
    this.wsService.sendNotifications('notification desde el front');
  }
}
