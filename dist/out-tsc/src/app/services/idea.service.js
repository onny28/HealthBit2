import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
let IdeaService = class IdeaService {
    constructor(afs) {
        this.afs = afs;
        this.ideaCollection = this.afs.collection('recipe');
        this.ideas = this.ideaCollection.snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getIdeas() {
        return this.ideas;
    }
    getIdea(id) {
        return this.ideaCollection.doc(id).valueChanges().pipe(take(1), map(idea => {
            idea.id = id;
            return idea;
        }));
    }
    addIdea(idea) {
        return this.ideaCollection.add(idea);
    }
    updateIdea(idea) {
        return this.ideaCollection.doc(idea.id).update({ name: idea.name, notes: idea.notes, steps: idea.steps, ingredients: idea.ingredients });
    }
    deleteIdea(id) {
        return this.ideaCollection.doc(id).delete();
    }
};
IdeaService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], IdeaService);
export { IdeaService };
//# sourceMappingURL=idea.service.js.map