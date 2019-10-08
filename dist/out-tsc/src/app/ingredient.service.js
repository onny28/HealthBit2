import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
let IngredientService = class IngredientService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    create_NewIngredient(record) {
        return this.firestore.collection('recipes/${recipes.id}/ingredients').add(record);
    }
    read_Ingredients() {
        return this.firestore.collection('recipes/${recipes.id}/ingredients').snapshotChanges();
    }
    update_Ingredient(recordID, record) {
        return this.firestore.doc('recipes/${recipes.id}/ingredients/' + recordID).update(record);
    }
    delete_Ingredient(record_id) {
        return this.firestore.doc('recipes/${recipes.id}/ingredients/' + record_id).delete();
    }
};
IngredientService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], IngredientService);
export { IngredientService };
//# sourceMappingURL=ingredient.service.js.map