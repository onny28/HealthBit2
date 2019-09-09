import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
let RecipeService = class RecipeService {
    constructor(afs) {
        this.afs = afs;
        this.recipeCollection = this.afs.collection('recipes');
        this.recipes = this.recipeCollection.snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getRecipes() {
        return this.recipes;
    }
    getRecipe(id) {
        return this.recipeCollection.doc(id).valueChanges().pipe(take(1), map(recipe => {
            recipe.id = id;
            return recipe;
        }));
    }
    addRecipe(recipe) {
        return this.recipeCollection.add(recipe);
    }
    updateRecipe(recipe) {
        return this.recipeCollection.doc(recipe.id).update({ name: recipe.name, category: recipe.category, ingredient: recipe.ingredient, steps: recipe.steps });
    }
    deleteRecipe(id) {
        return this.recipeCollection.doc(id).delete();
    }
};
RecipeService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], RecipeService);
export { RecipeService };
//# sourceMappingURL=recipe.service.js.map