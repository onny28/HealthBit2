import { Injectable, NgModule } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import firebaseConfig from './firebase'; 


@Injectable({
  providedIn: 'root'
})


export class FirebaseService {

  constructor(
    public firestore: AngularFirestore,
  ) {}

 
  create_NewUser(record) {
    return this.firestore.collection('UserDetails').add(record);
  }

  read_Users() {
    return this.firestore.collection('UserDetails/${DocumentID}').snapshotChanges();
  }

  update_User(recordID, record) {
    this.firestore.doc('UserDetails/' + recordID).update(record);
  }

  delete_User(record_id) {
    this.firestore.doc('UserDetails/' + record_id).delete();
  }

  

}
