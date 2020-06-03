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
  private ClientesCollection: AngularFirestoreCollection<Clientes>;

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
  getInmuebles(email: string) {
    console.log(email)
    return this.afs.collection<MessageI>('ingfor', ref => ref.where('email', '==', email)).valueChanges();
  }
  saveClientes(newClientes: Clientes): void {
    this.ClientesCollection.add(newClientes);
  }

  getCaracteristicas() {
    return [
      { id: 1, descripcion: '5k renta' },
      { id: 2, descripcion: '9k renta' },
      { id: 3, descripcion: '30k renta' },
      { id: 4, descripcion: '70k renta' },
      { id: 5, descripcion: '.15M renta' },
      { id: 6, descripcion: '.35M renta' },
      { id: 7, descripcion: '.70M renta' },
      { id: 8, descripcion: '.90M renta' },
      { id: 9, descripcion: '.5M venta' },
      { id: 10, descripcion: '1.1M venta' },
      { id: 12, descripcion: '2.5M venta' },
      { id: 13, descripcion: '6M venta' },
      { id: 14, descripcion: '15M venta' },
      { id: 15, descripcion: '50M venta' },
      { id: 16, descripcion: '500M venta' },
      { id: 17, descripcion: '999M+ venta' },
      { id: 18, descripcion: '3 baños' },
      { id: 19, descripcion: '5 baños' },
      { id: 20, descripcion: '9+ baños' },
      { id: 21, descripcion: '3 habitaciones' },
      { id: 22, descripcion: '5 habitaciones' },
      { id: 23, descripcion: '9+ habitaciones' },
      { id: 24, descripcion: '$ MX' },
      { id: 25, descripcion: '$ US' },
      { id: 26, descripcion: '$ Euro' },

    ]
  }

}


// public createReaction(comment: IComment, reactionType: EReactionType) {
//   const reaction: IReaction = {
//     // commentId: comment._id,
//     userId: this.authService.user.uid,
//     knowAs: this.authService.user.displayName,
//     typeId: reactionType,
//     // created: this.commentsFirebaseService.firebase.firestore.FieldValue.serverTimestamp(),
//   }

//   this.commentsFirebaseService.db.collection("comments").doc(comment._id).update({
//     [reactionType === 1 ? 'inFavor' : 'against']: this.commentsFirebaseService.firebase.firestore.FieldValue.increment(1),
//     reactions: this.commentsFirebaseService.firebase.firestore.FieldValue.arrayUnion(reaction)

//   });
// }

// public deleteReaction(comment: IComment) {
//   this.commentsFirebaseService.db.collection("comments").doc(comment._id).update({
//     [comment._reaction.typeId === 1 ? 'inFavor' : 'against']: this.commentsFirebaseService.firebase.firestore.FieldValue.increment(-1),
//     reactions: this.commentsFirebaseService.firebase.firestore.FieldValue.arrayRemove(comment._reaction)
//   }).then(result => {
//     comment._reaction = undefined;
//   });
// }

// public updateReaction(comment: IComment, reactionType: EReactionType) {

//   this.commentsFirebaseService.db.collection("comments").doc(comment._id).update({
//     [comment._reaction.typeId === 1 ? 'inFavor' : 'against']: this.commentsFirebaseService.firebase.firestore.FieldValue.increment(-1),
//     reactions: this.commentsFirebaseService.firebase.firestore.FieldValue.arrayRemove(comment._reaction)
//   }).then(result => {
//     const reaction: IReaction = {
//       userId: this.authService.user.uid,
//       knowAs: this.authService.user.displayName,
//       typeId: reactionType,
//     }
//     comment._reaction = reaction;
//     this.commentsFirebaseService.db.collection("comments").doc(comment._id).update({
//       [reactionType === 1 ? 'inFavor' : 'against']: this.commentsFirebaseService.firebase.firestore.FieldValue.increment(1),
//       reactions: this.commentsFirebaseService.firebase.firestore.FieldValue.arrayUnion(reaction)
//     });
//   });
// }