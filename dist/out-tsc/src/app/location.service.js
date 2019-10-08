import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
let LocationService = class LocationService {
    constructor(afs) {
        this.afs = afs;
        this.locationCollection = this.afs.collection('locations');
        this.locations = this.locationCollection.snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getLocations() {
        return this.locations;
    }
    getLocation(id) {
        return this.locationCollection.doc(id).valueChanges().pipe(take(1), map(location => {
            location.id = id;
            return location;
        }));
    }
    addLocation(location) {
        return this.locationCollection.add(location);
    }
    updateLocation(location) {
        return this.locationCollection.doc(location.id).update({ name: location.name, address: location.address });
    }
    deleteLocation(id) {
        return this.locationCollection.doc(id).delete();
    }
};
LocationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], LocationService);
export { LocationService };
//# sourceMappingURL=location.service.js.map