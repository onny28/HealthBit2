import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
let ViewrecipepagePage = class ViewrecipepagePage {
    constructor(activatedRoute, recipeService, toastCtrl, router) {
        this.activatedRoute = activatedRoute;
        this.recipeService = recipeService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.recipe = {
            id: '',
            name: '',
            category: '',
            ingredient: '',
            steps: '',
        };
        this.segment = 0;
    }
    ngOnInit() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.recipeService.getRecipe(id).subscribe(recipe => {
                this.recipe = recipe;
            });
        }
    }
    // adding recipe
    addRecipe() {
        this.recipeService.addRecipe(this.recipe).then(() => {
            this.router.navigateByUrl('/recipes');
            this.showToast('recipe added to feed');
        }, err => {
            this.showToast('There is an error adding the recipe :(');
        });
    }
    // deleting recipe
    deleteRecipe() {
        this.recipeService.deleteRecipe(this.recipe.id).then(() => {
            this.router.navigateByUrl('/recipes');
            this.showToast('Recipe deleted');
        }, err => {
            this.showToast('There was a problem deleting your recipe :(');
        });
    }
    // update recipe
    updateRecipe() {
        this.recipeService.updateRecipe(this.recipe).then(() => {
            this.showToast('Recipe updated');
        }, err => {
            this.showToast('there was a problem updating your recipes :(');
        });
    }
    //   db.collection("recipes").get()
    //   .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log(doc.id, " => ", doc.data());
    //   });
    // });
    //   addIngredients(){
    //     if(this.ingredientList.length > 0){
    //       let ingredient = this.ingredientList;
    //       this.ingredientList.push(ingredient);
    //       this.ingredientName = "";
    //     }
    //   }
    //   deleteIngredients(index){
    // this.ingredientList.splice(index, 1);
    //   }
    showToast(msg) {
        this.toastCtrl.create({
            message: msg,
            duration: 2000
        }).then(toast => toast.present());
    }
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
], ViewrecipepagePage.prototype, "slider", void 0);
ViewrecipepagePage = tslib_1.__decorate([
    Component({
        selector: 'app-viewrecipepage',
        templateUrl: './viewrecipepage.page.html',
        styleUrls: ['./viewrecipepage.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, RecipeService,
        ToastController, Router])
], ViewrecipepagePage);
export { ViewrecipepagePage };
//# sourceMappingURL=viewrecipepage.page.js.map