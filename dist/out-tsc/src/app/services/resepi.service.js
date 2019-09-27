import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
let ResepiService = class ResepiService {
    constructor(afs) {
        this.afs = afs;
        this.resepiCollection = this.afs.collection('resepi');
        this.resepis = this.resepiCollection.snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getIdeas() {
        return this.resepis;
    }
    getIdea(id) {
        return this.resepiCollection.doc(id).valueChanges().pipe(take(1), map(resepi => {
            resepi.id = id;
            return resepi;
        }));
    }
    addIdea(resepi) {
        return this.resepiCollection.add(resepi);
    }
    updateIdea(resepi) {
        return this.resepiCollection.doc(resepi.id).update({ name: resepi.name, category: resepi.category, steps: resepi.steps });
    }
    deleteIdea(id) {
        return this.resepiCollection.doc(id).delete();
    }
};
ResepiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], ResepiService);
export { ResepiService };
//# sourceMappingURL=resepi.service.js.map