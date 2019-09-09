import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CreateingredientsPage = class CreateingredientsPage {
    constructor() { }
    // constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    //   public firestore: AngularFirestore, private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }
    // getIngredients(){
    //   let id= this.activatedRoute.snapshot.paramMap.get('id');
    // if(id) {
    //   this.recipeService.getRecipe(id).subscribe(recipe =>{
    //     this.recipeId = getRecipe(id);
    //     this.firestoreIngredientList = this.firestore.doc<any>('recipes/' + this.recipedId).collection('Ingredients').valueChanges();
    //    }
    //   });
    //   addIngredients(){
    //     if(this.ingredientName.length > 0){
    //       let ingredient = this.ingredientName;
    //       this.ingredientList.push(ingredient);
    //       this.ingredientName = "";
    //     }
    //   }
    //   deleteIngredients(index){
    // this.ingredientList.splice(index, 1);
    //   }
    // updateIngredients(index){
    //   let alert = this.alertCtrl.create({
    //     message: 'type in ingredient',
    //     inputs: [{name: 'editIngredient', placeholder:'Ingredient'}],
    //     buttons: [{text: 'Cancel', role: 'cancel'},
    //   {text:'Edit', handler: data => {
    //     this.ingredientList[index]= data.editIngredient;}
    //   }
    //   ]
    //   });
    //   alert.present();
    // }
    ngOnInit() {
    }
};
CreateingredientsPage = tslib_1.__decorate([
    Component({
        selector: 'app-createingredients',
        templateUrl: './createingredients.page.html',
        styleUrls: ['./createingredients.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CreateingredientsPage);
export { CreateingredientsPage };
//# sourceMappingURL=createingredients.page.js.map