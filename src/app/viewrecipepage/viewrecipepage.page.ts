import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController} from '@ionic/angular';
import { RecipeService, Recipe } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewrecipepage',
  templateUrl: './viewrecipepage.page.html',
  styleUrls: ['./viewrecipepage.page.scss'],
})
export class ViewrecipepagePage implements OnInit {

  recipe: Recipe = {
    name: '',
    category: '',
    steps:'',
    ingredient: ''
  };


  @ViewChild('slides', {static: false}) slider: IonSlides;

  segment = 0;
  

  constructor(private activatedRoute: ActivatedRoute,  private recipeService: RecipeService,
    private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let id= this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipe(id).subscribe(recipe =>{
        this.recipe = recipe; 
      });
    }
  }

  // adding recipe
  addRecipe(){
    this.recipeService.addRecipe(this.recipe).then(() => {
      this.router.navigateByUrl('/createingredients');
      this.showToast('recipe added to feed');
    }, err => {
      this.showToast('There is an error adding the recipe :(');
    });
  }
  
  // deleting recipe
  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipe.id).then(() => {
    this.router.navigateByUrl('/recipes');
    this.showToast('Recipe deleted');
  }, err => {
    this.showToast('There was a problem deleting your recipe :(');
  });
}

  // update recipe
  updateRecipe(){
    this.recipeService.updateRecipe(this.recipe).then(() =>{
      this.showToast('Recipe updated'); 
    },
      err=> {
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


  showToast(msg){
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

//slides
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}
