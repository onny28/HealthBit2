import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_NewIngredient(record){
    return this.firestore.collection('recipes/${recipes.id}/ingredients').add(record);
  }

  read_Ingredients(){
    return this.firestore.collection('recipes/${recipes.id}/ingredients').snapshotChanges();
  }
  
  update_Ingredient(recordID, record){
    return this.firestore.doc('recipes/${recipes.id}/ingredients/' + recordID).update(record);
  }1

  delete_Ingredient(record_id){
    return this.firestore.doc('recipes/${recipes.id}/ingredients/' + record_id).delete();
  }
}
