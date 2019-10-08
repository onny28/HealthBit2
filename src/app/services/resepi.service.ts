import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Resepi {
  id?: string,
  name: string,
  category: string
  steps: string
}
@Injectable({
  providedIn: 'root'
})
export class ResepiService {
  private resepis: Observable<Resepi[]>;
  private resepiCollection: AngularFirestoreCollection<Resepi>;
 
  constructor(private afs: AngularFirestore) {
    this.resepiCollection = this.afs.collection<Resepi>('resepi');
    this.resepis = this.resepiCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getIdeas(): Observable<Resepi[]> {
    return this.resepis;
  }
 
  getIdea(id: string): Observable<Resepi> {
    return this.resepiCollection.doc<Resepi>(id).valueChanges().pipe(
      take(1),
      map(resepi => {
        resepi.id = id;
        return resepi
      })
    );
  }
 
  addIdea(resepi: Resepi): Promise<DocumentReference> {
    return this.resepiCollection.add(resepi);
  }
 
  updateIdea(resepi: Resepi): Promise<void> {
    return this.resepiCollection.doc(resepi.id).update({ name: resepi.name, category: resepi.category, steps: resepi.steps });
  }
 
  deleteIdea(id: string): Promise<void> {
    return this.resepiCollection.doc(id).delete();
  }
}