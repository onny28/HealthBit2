import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from 'app/services/idea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { CartService } from 'app/cart.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-adminrecipe',
  templateUrl: './adminrecipe.page.html',
  styleUrls: ['./adminrecipe.page.scss'],
})
export class AdminrecipePage implements OnInit {
  

  idea: Idea = {
    name: '',
    notes: '',
    steps:'',
    ingredients: [{
      name: '',
      price: null,
    }],
    calories: null,
    video: '',
    };

    ingredients =[];
  loader: HTMLIonLoadingElement;
  loading: boolean;
  

  constructor(
    private activatedRoute: ActivatedRoute, 
    private ideaService: IdeaService,
    private toastCtrl: ToastController, 
    private router: Router, 
    public navCtrl: NavController, 
    private cartService: CartService,
    public loadingCtrl: LoadingController,) { }
   
    ngOnInit(){
      var user = firebase.auth().currentUser;
      if(user){
          // User is signed in.
         
      }else {
        // No user is signed in.
        this.navCtrl.navigateBack('/login');
      }
    
    }
    
  
  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.ideaService.getIdea(id).subscribe(idea => {
        this.idea = idea;
        // this.idea.ingredients = this.ingredients;

      });
      
    }
  }
 
  addIdea() {
    this.ideaService.addIdea(this.idea).then(() => {
      this.router.navigateByUrl('/adminpage');
      this.showToast('recipe added to the feed');
    }, err => {
      this.showToast('There was a problem adding your recipe. ');
    });
  }
 
  deleteIdea() {
    this.ideaService.deleteIdea(this.idea.id).then(() => {
      this.router.navigateByUrl('/adminpage');
      this.showToast('recipe deleted');
    }, err => {
      this.showToast('There was a problem deleting your recipe. ');
    });
  }
 
  updateIdea() {
    this.ideaService.updateIdea(this.idea).then(() => {
      this.showToast('recipe updated');
    }, err => {
      this.showToast('There was a problem updating your recipe. ');
    });
  }

  addIngredient(){
    this.idea.ingredients.push({name: "" , price: null});
    // "name" : '' , 
    // "price": null});
  }

  addToCart(ingredient){
    this.showToast('added to cart!');
    // let ingredients = this.idea.ingredients;
    this.idea.ingredients = ingredient;
    this.cartService.addCart(ingredient);
  }

 
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}

