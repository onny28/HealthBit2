import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { RecipeService, Recipe } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IngredientService } from '../ingredient.service';

// export interface Ingredient {
//   id: string;
//   name: string;
// }

@Component({
  selector: 'app-createingredients',
  templateUrl: './createingredients.page.html',
  styleUrls: ['./createingredients.page.scss'],
})

export class CreateingredientsPage implements OnInit {



  ingredients: any;
  ingredientName: string;
  ingredientPrice: number;
 
  

  constructor(private ingredientService: IngredientService, public navCtrl: NavController
    , private toastCtrl: ToastController, private router: Router, private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.ingredientService.read_Ingredients().subscribe(data => {
      this.ingredients = data.map(e => {
        return{
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Price: e.payload.doc.data()['Price'],
        };
      })
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

  addtorecipe(){
    this.router.navigateByUrl('/recipes');
  }
 
// showToast(msg){
//   this.toastCtrl.create({
//     message: msg,
//     duration: 2000
//   }).then(toast => toast.present());
// }
 

  // recipe: Recipe = {
  //   name: '',
  //   category: '',
  //   ingredient: '',
  //   steps:'',
  // };

  

  // ingredientList= [];
  // ingredientName: string;
  // ingredients: Observable<Ingredient[]>;


  // // constructor(){}
  // private ingredientCollection: AngularFirestoreCollection<Ingredient>;

  // constructor(public navCtrl: NavController, public alertCtrl: AlertController,
  //   public afs: AngularFirestore, private recipeService: RecipeService, private activatedRoute: ActivatedRoute) {
  //     this.ingredientCollection = afs.collection<Ingredient>('ingredients');
  //     this.ingredients = this.ingredientCollection.valueChanges();
  //    }

  //    addIngredient(name: string){
  //      const id = this.afs.createId();
  //      const ingredient: Ingredient = {id, name};
  //      this.ingredientCollection.doc(id).set(ingredient);

  //    }

    // getIngredients(){
    //   let id= this.activatedRoute.snapshot.paramMap.get('id');
    // if(id) {
    //   this.recipeService.getRecipe(id).subscribe(recipe =>{
    //     this.recipeId = getRecipe(id);
    //     this.firestoreIngredientList = this.firestore.doc<any>('recipes/' + this.recipedId).collection('Ingredients').valueChanges();
    //    }
    //   });

   

  // addIngredients(){
  //   if(this.ingredientName.length > 0){
  //     let ingredient = this.ingredientName;
  //     this.ingredientList.push(ingredient);
  //     this.ingredientName = "";
  //   }
  // }

  // deleteIngredients(index){
  // this.ingredientList.splice(index, 1);
  // }

  // addRecipe(ingredient: Ingredient): Promise<DocumentReference>{
  //   return this.ingredientCollection.add(ingredient);
  // }



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

}
