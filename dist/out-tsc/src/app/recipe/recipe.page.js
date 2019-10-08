import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
// import { RecipeService } from "../recipe.service";
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireDatabase } from '@angular/fire/database';
let RecipePage = class RecipePage {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
        //  this.setFilteredItems();
    }
};
RecipePage = tslib_1.__decorate([
    Component({
        selector: 'app-recipe',
        templateUrl: './recipe.page.html',
        styleUrls: ['./recipe.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [RecipeService])
], RecipePage);
export { RecipePage };
// setFilteredItems(){
//   this.recipes = this.recipeService.filterItems(this.searchTerm);
// }
//   filter(event){
//     const search= event.target.value
//     console.log('')
//     if(search && search.trim() != '') {
//       console.log('')
//       this.initializeListSearch();
//       console.log(this.recipes)
//       this.recipes = this.recipeAux.filter(name => {
//         return name.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
//     });
//   } else {
//     this.recipes;
//   }
// }
// initializeListSearch(){
//   this.af.collection('recipes').valueChanges()
// }
//  constructor(private recipeService: RecipeService ) {}
//   ngOnInit() {
//        this.recipeService.read_Recipes().subscribe(data => {
//          this.recipes = data.map(e=> {
//            return{
//              id: e.payload.doc.id,
//              isEdit: false,
//              Name: e.payload.doc.data()['Name'],
//              Category: e.payload.doc.data()['Category'],
//            };
//          })
//          console.log(this.recipes);
//        });
//  }
//  CreateRecord(){
//    let record ={};
//    record['Name'] = this.foodName;
//    record['Category'] = this.category;
//    this.recipeService.create_NewRecipe(record).then(resp => {
//      this.foodName = "";
//      this.category = "";
//      console.log(resp);
//    })
//    .catch(error => {
//      console.log(error);
//    });
//  }
//  RemoveRecord(rowID) {
//    this.recipeService.delete_Recipes(rowID);
//  }
//  EditRecord(record){
//    record.isEdit = true;
//    record.EditName = record.Name;
//    record.EditCategory = record.category;
//  }
//  UpdateRecord(recordRow){
//    let record = {};
//    record['Name'] = recordRow.EditName;
//   record['Category'] = recordRow.EditCategory;
//   this.recipeService.update_Recipes(recordRow.id, record);
//   recordRow.isEdit = false;
//   }
//# sourceMappingURL=recipe.page.js.map