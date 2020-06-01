import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Etiquetas } from '@shared/Models/Etiquetas.interface';
import { MessageI } from '@shared/Models/message.interface';
import { User } from '@app/shared/models/user.interface';
import { Clientes } from '@shared/Models/Clientes.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  private ingforCollection: AngularFirestoreCollection<MessageI>;
  private etiquetasCollection: AngularFirestoreCollection<Etiquetas>;
  private ClientesCollection:AngularFirestoreCollection<Clientes>;

  constructor(private afs: AngularFirestore) {
    this.ingforCollection = afs.collection<MessageI>('ingfor');
    this.etiquetasCollection = afs.collection<Etiquetas>('Etiquetas');
    this.ClientesCollection = afs.collection<Clientes>('Clientes');
  }

  saveMessage(newContact: MessageI): void {
    this.ingforCollection.add(newContact);
  }
  saveEtiqueta(newHabitacional: Etiquetas): void {
    this.etiquetasCollection.add(newHabitacional);
  }
 getInmuebles(email: string){
   console.log(email)
   return this.afs.collection<MessageI>('ingfor', ref => ref.where('email', '==', email)).valueChanges();
 }
 saveClientes(newClientes: Clientes): void {
  this.ClientesCollection.add(newClientes);
}
  
}
