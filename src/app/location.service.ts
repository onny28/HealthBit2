import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Location {
  id?: string,
  name: string,
  address: string,
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations: Observable<Location[]>;
  private locationCollection: AngularFirestoreCollection<Location>;
  
  constructor(private afs: AngularFirestore) {
    this.locationCollection = this.afs.collection<Location>('locations');
    this.locations = this.locationCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

   getLocations(): Observable<Location[]> {
     return this.locations;
   }

   getLocation(id: string): Observable<Location> {
     return this.locationCollection.doc<Location>(id).valueChanges().pipe(
       take(1),
       map(location => {
         location.id = id;
         return location
       })
     );
   }
 
   addLocation(location: Location): Promise<DocumentReference> {
     return this.locationCollection.add(location);
   }

   updateLocation(location: Location): Promise<void> {
     return this.locationCollection.doc(location.id).update({name: location.name, address: location.address});
   }

   deleteLocation(id: string): Promise<void> {
     return this.locationCollection.doc(id).delete();
   }
}


