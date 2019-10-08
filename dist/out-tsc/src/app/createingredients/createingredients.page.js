import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientService } from '../ingredient.service';
// export interface Ingredient {
//   id: string;
//   name: string;
// }
let CreateingredientsPage = class CreateingredientsPage {
    constructor(ingredientService, navCtrl, toastCtrl, router, activatedRoute, recipeService) {
        this.ingredientService = ingredientService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.recipeService = recipeService;
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
    createIngredient() {
        let record = {};
        record['Name'] = this.ingredientName;
        record['Price'] = this.ingredientPrice;
        this.ingredientService.create_NewIngredient(record).then(resp => {
            this.ingredientName = "";
            this.ingredientPrice = undefined;
            console.log(resp);
        })
            .catch(error => {
            console.log(error);
        });
    }
    RemoveRecord(rowID) {
        this.ingredientService.delete_Ingredient(rowID);
    }
    EditRecord(record) {
        record.isEdit = true;
        record.EditName = record.Name;
        record.EditAge = record.Price;
    }
    UpdateRecord(recordRow) {
        let record = {};
        record['Name'] = recordRow.EditName;
        record['Price'] = recordRow.EditPrice;
        this.ingredientService.update_Ingredient(recordRow.id, record);
        recordRow.isEdit = false;
    }
    addtorecipe() {
        this.router.navigateByUrl('/recipes');
    }
};
CreateingredientsPage = tslib_1.__decorate([
    Component({
        selector: 'app-createingredients',
        templateUrl: './createingredients.page.html',
        styleUrls: ['./createingredients.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [IngredientService, NavController,
        ToastController, Router, ActivatedRoute, RecipeService])
], CreateingredientsPage);
export { CreateingredientsPage };
//# sourceMappingURL=createingredients.page.js.map