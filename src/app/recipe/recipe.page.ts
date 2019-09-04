import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { RecipeService } from "../recipe.service";
import { RecipeService, Recipe} from '../recipe.service';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {


  // recipes: any;
  // foodName: string;
  // category: string;
  
  private recipes: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService){}
  
  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }
  
}
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

