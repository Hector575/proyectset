import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface MessageI { calle: string; Cp:string; NumeroExterior:string; NumeroInterior:string; colonia:string; ciudad:string; Estado:string;  Renta:string; Moneda:string; Venta:string; Banos:string; Habitaciones:string;}


@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent implements OnInit {

  private MessageICollection: AngularFirestoreCollection<MessageI>;
  MessageI: Observable<MessageI[]>;
   

  constructor(private afs: AngularFirestore) {
    this.MessageICollection = afs.collection<MessageI>('ingfor');
    this.MessageI = this.MessageICollection.valueChanges();

  }

  ngOnInit(): void {
  }

}
