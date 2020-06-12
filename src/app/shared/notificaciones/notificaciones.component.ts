import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging/messaging';
import { mergeMap } from 'rxjs/operators';


@Component({

  selector: 'app-notificaciones',
  templateUrl:'./notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit  {
  constructor(private afMessaging: AngularFireMessaging) { }
  ngOnInit(): void {}

  requestPermission() {
    this.afMessaging.requestPermission
      .subscribe(
        () => { console.log('Permission granted!'); },
        (error) => { console.error(error); },  
      );
  }

  deleteToken() {
    this.afMessaging.getToken
      .pipe(mergeMap(token => this.afMessaging.deleteToken(token)))
      .subscribe(
        (token) => { console.log('Token deleted!'); },
      );
  }

  listen() {
    this.afMessaging.messages
      .subscribe((message) => { console.log(message); });
  }
}
