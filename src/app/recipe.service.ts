import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

export interface Recipe {
  id?: string,
  name: string,
  category: string,
  steps: string,
  ingredient: string
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Observable<Recipe[]>;
  private recipeCollection: AngularFirestoreCollection<Recipe>;

  constructor(private afs: AngularFirestore) { 
    this.recipeCollection =this.afs.collection<Recipe>('recipes');
    this.recipes = this.recipeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getRecipes(): Observable<Recipe[]> {
    return this.recipes;
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.recipeCollection.doc<Recipe>(id).valueChanges().pipe(
      take(1),
      map(recipe => {
        recipe.id = id;
        return recipe 
      })
    );
  }

  addRecipe(recipe: Recipe): Promise<DocumentReference>{
    return this.recipeCollection.add(recipe);
  }

  updateRecipe(recipe: Recipe): Promise<void>{
   return this.recipeCollection.doc(recipe.id).update({name: recipe.name, category: recipe.category, ingredient: recipe.ingredient, steps: recipe.steps});
  }

  deleteRecipe(id: string): Promise<void> {
    return this.recipeCollection.doc(id).delete();
  }

  // filterItems(searchTerm) {
  //   return this.recipes.filter(recipe => {
  //     return recipe.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  //   });
  // }
  

//   addIngredient(recipe: Recipe): {
//     return this.recipeCollection.add(recipe + )
//   }

//     addIngredients(){
//     if(this.ingredientList.length > 0){
//       let ingredient = this.ingredientList;
//       this.ingredientList.push(ingredient);

//       this.ingredientOp = "";
//     }
//   }

//   deleteIngredients(index){
// this.ingredientOp.splice(index, 1);
//   }
// }
}
