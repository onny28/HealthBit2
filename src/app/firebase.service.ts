import { Injectable, NgModule } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import firebaseConfig from './firebase'; 

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})


export class FirebaseService {

 

  constructor(
    public firestore: AngularFirestore,
    
  ) {
    
  }

  

 
  create_NewUser(record) {
    return this.firestore.collection('UserDetails').add(record);
  }

  read_Users() {
    return this.firestore.collection('UserDetails').snapshotChanges().pipe();
  }

  update_User(recordID, record) {
    this.firestore.doc('UserDetails/' + recordID).update(record);
  }

  delete_User(record_id) {
    this.firestore.doc('UserDetails/' + record_id).delete();
  }

  logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }





  

}
