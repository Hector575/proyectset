import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '@app/auth/services/auth.service';
import { User } from '@app/shared/models/user.interface';
import { Router } from '@angular/router';
import { DataService } from '@app/auth/services/data-db.service';

export interface MessageI { CincoKRenta:boolean; calle: string; Cp:string; NumeroExterior:string; NumeroInterior:string; colonia:string; ciudad:string; Estado:string;  Renta:string; Moneda:string; Venta:string; Banos:string; Habitaciones:string;}


@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent implements OnInit {

  public user$: Observable<User> = this.authSvc.afAuth.user;
  public inmubles$: Observable<MessageI[]>;

constructor(public authSvc: AuthService, private router: Router, private datadbService: DataService) {


  
}


  ngOnInit(): void {
    this.user$.subscribe( user => {
      console.log(user)
    this.inmubles$ = this.datadbService.getInmuebles(user.email);
    });
  }


}
