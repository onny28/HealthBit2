import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { RecipeService } from '../recipe.service';
import { AngularFirestore } from '@angular/fire/firestore';
let IngredientsPage = class IngredientsPage {
    constructor(recipeService, firestore) {
        this.recipeService = recipeService;
        this.firestore = firestore;
        this.segment = 0;
    }
    ngOnInit() {
        // this.recipes = this.recipeService.getRecipes();
    }
    // getCollections(db) {
    //   // [START get_collections]
    //   let sfRef = db.collection('recipes').doc('SF');
    //   sfRef.getCollections().then(collections => {
    //     collections.forEach(collection => {
    //       console.log('Found subcollection with id:', collection.id);
    //     });
    //   });
    //   // [END get_collections]
    // }
    //slides
    segmentChanged() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.slider.slideTo(this.segment);
        });
    }
    slideChanged() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.segment = yield this.slider.getActiveIndex();
        });
    }
};
tslib_1.__decorate([
    ViewChild('slides', { static: false }),
    tslib_1.__metadata("design:type", IonSlides)
], IngredientsPage.prototype, "slider", void 0);
IngredientsPage = tslib_1.__decorate([
    Component({
        selector: 'app-ingredients',
        templateUrl: './ingredients.page.html',
        styleUrls: ['./ingredients.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [RecipeService, AngularFirestore])
], IngredientsPage);
export { IngredientsPage };
//# sourceMappingURL=ingredients.page.js.map