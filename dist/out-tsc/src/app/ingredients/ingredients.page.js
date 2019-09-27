import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { RecipeService } from '../recipe.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { IngredientService } from '../ingredient.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
let IngredientsPage = class IngredientsPage {
    constructor(recipeService, firestore, ingredientService, route, cartService) {
        this.recipeService = recipeService;
        this.firestore = firestore;
        this.ingredientService = ingredientService;
        this.route = route;
        this.cartService = cartService;
        this.segment = 0;
    }
    ngOnInit() {
        this.ingredientService.read_Ingredients().subscribe(data => {
            this.ingredients = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Name: e.payload.doc.data()['Name'],
                    Price: e.payload.doc.data()['Price'],
                };
            });
            console.log(this.ingredients);
        });
    }
    addToCart(ingredients) {
        window.alert('Added to Grocery list!');
        this.cartService.addToCart(ingredients);
    }
    ;
    // this.recipes = this.recipeService.getRecipes();
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
    tslib_1.__metadata("design:paramtypes", [RecipeService, AngularFirestore, IngredientService,
        ActivatedRoute, CartService])
], IngredientsPage);
export { IngredientsPage };
//# sourceMappingURL=ingredients.page.js.map