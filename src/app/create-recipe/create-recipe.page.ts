import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { NavController, LoadingController } from '@ionic/angular'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.page.html',
  styleUrls: ['./create-recipe.page.scss'],
})
export class CreateRecipePage implements OnInit {

  recipeName: string;
  category: string;
  ingredient: Array<String>;
  steps: string;
  price: number;
  recipeForm: FormGroup;
  recipeCount: any;


  constructor(
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
  ) {
    this.recipeForm = this.formBuilder.group({
      recipeName: new FormControl('', Validators.compose([
        Validators.required,
      ])),
     category: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      steps: new FormControl('', Validators.compose([
        Validators.required,
      ])),
     ingredients : this.formBuilder.array([
      this.ingredientField(),
   ])
    })
    
   }

   ingredientField() : FormGroup
   {
      return this.formBuilder.group({
         ingredient : ['', Validators.required]
      });
   }


  ngOnInit() {
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }
  }

  addNewInputField() : void
   {
      const control = <FormArray>this.recipeForm.controls.ingredients;
      control.push(this.ingredientField());
   }


   removeInputField(i : number) : void
   {
      const control = <FormArray>this.recipeForm.controls.ingredients;
      control.removeAt(i);
   }


  CreateRecipe() {
    let recipe = {};
    recipe['recipeName'] = this.recipeName;
    recipe['category'] = this.category;
    recipe['ingredient'] = this.ingredient;
    recipe['steps'] = this.steps;
    recipe['price'] = this.price;
    this.firebaseService.create_newRecipe(recipe).then(resp => {
      this.recipeName = "";
      this.category = "";
      this.ingredient = [""];
      this.steps = "";
      this.price = undefined;
      console.log(resp);
      // this.navCtrl.navigateForward('/tabs/tabs/home')
    })
      .catch(error => {
        console.dir(error);
      });
  }


}
