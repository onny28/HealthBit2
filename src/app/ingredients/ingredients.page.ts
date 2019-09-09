import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Recipe, RecipeService } from '../recipe.service';
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';
import { IngredientService } from '../ingredient.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {
  @ViewChild('slides', {static: false}) slider: IonSlides;

  segment = 0;
  private recipes: Observable<Recipe[]>;
  ingredients: any;

  constructor(private recipeService: RecipeService, public firestore: AngularFirestore, private ingredientService:IngredientService,
    private route: ActivatedRoute, private cartService: CartService){}
  
  ngOnInit(){
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

    addToCart(ingredients){
      window.alert('Added to Grocery list!');
      this.cartService.addToCart(ingredients)
    };

   
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
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}
