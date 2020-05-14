import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Etiquetas } from '@shared/Models/Etiquetas.interface';
import { MessageI } from '@shared/Models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  private ingforCollection: AngularFirestoreCollection<MessageI>;
  private etiquetasCollection: AngularFirestoreCollection<Etiquetas>;

  constructor(afs: AngularFirestore) {
    this.ingforCollection = afs.collection<MessageI>('ingfor');
    this.etiquetasCollection = afs.collection<Etiquetas>('Etiquetas');
  }

  saveMessage(newContact: MessageI): void {
    this.ingforCollection.add(newContact);
  }
  saveEtiqueta(newHabitacional: Etiquetas): void {
    this.etiquetasCollection.add(newHabitacional);
  }

}
