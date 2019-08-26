import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

export interface Recipe {
  id?: string,
  name: string,
  category: string,
  ingredients: string,
  steps: string
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // constructor(public firestore: AngularFirestore){
  // }

  // createRecipe(
  //   foodName: string,
  //   Category: string,
  //   Ingredients: string,
  //   Steps: string
  // ): Promise<void> {
  //   const id = this.firestore.createId();

  //   return this.firestore.doc('Recipes/${id}').set({
  //     id,
  //     foodName,
  //     Category,
  //     Ingredients,
  //     Steps,
  //   });
  // }

  // getRecipeList(): AngularFirestoreCollection<Recipe>{
  //   return this.firestore.collection('Recipes');
  // }

  // getRecipeDetail(recipeId: string): AngularFirestoreDocument<Recipe>{
  //   return this.firestore.collection('Recipes').doc(recipeId);
  // }

  private recipes: Observable<Recipe[]>;
  private recipeCollection: AngularFirestoreCollection<Recipe>;

  constructor(private afs: AngularFirestore) { 
    this.recipeCollection =this.afs.collection<Recipe>('recipes');
    this.recipes = this.recipeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
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
        return recipe })
    );
  }

  addRecipe(recipe: Recipe): Promise<DocumentReference>{
    return this.recipeCollection.add(recipe);
  }

  updateRecipe(recipe: Recipe): Promise<void>{
   return this.recipeCollection.doc(recipe.id).update({name: recipe.name, category: recipe.category, ingredients: recipe.ingredients, steps: recipe.steps});
  }

  deleteRecipe(id: string): Promise<void> {
    return this.recipeCollection.doc(id).delete();
  }

  // constructor( private firestore: AngularFirestore) {}
  
  //  create_NewRecipe(record) {
  //    return this.firestore.collection('Recipes').add(record);
  //  }

  //  read_Recipes(){
  //    return this.firestore.collection('Recipes').snapshotChanges();
  //  }

  //  update_Recipes(recordID, record){
  //    this.firestore.doc('Recipes/' + recordID).update(record);
  //  }

  //  delete_Recipes(record_id){
  //    this.firestore.doc('Recipes/' + record_id).delete();
  //  }
}
