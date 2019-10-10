import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService, Idea } from '../../services/idea.service';
import { ToastController, IonSlides, NavController } from '@ionic/angular';
import { CartService } from 'app/cart.service';
import { FirebaseService } from 'app/firebase.service';



 
@Component({
  selector: 'app-idea-details',
  templateUrl: './idea-details.page.html',
  styleUrls: ['./idea-details.page.scss'],
})
export class IdeaDetailsPage implements OnInit {

  idea: Idea = {
    name: '',
    notes: '',
    steps:'',
    ingredients: [ {
      "name" : "",
      "price" : null, }
    ],
    calories: null,
    };
    comment: string;
    userEmail: string;
    userID: string;
    chat;
    recipeName: string;

    // ingredients: {
    //   "title" : "testing title",
    //   "ingredients": [
    //     { "ingredients" : "" }
    //   ]
    // }

 @ViewChild('slides', {static: false}) slider: IonSlides;
     segment = 0;
     cart =[];
     items = [];
  
   
     
 
  constructor(
    private activatedRoute: ActivatedRoute, 
    private ideaService: IdeaService,
    private toastCtrl: ToastController, 
    private router: Router, 
    public navCtrl: NavController, 
    private cartService: CartService,
    private firebaseService: FirebaseService,
    ) { }
 
  ngOnInit() {
    this.items=this.cartService.getIngredients();
    this.cart = this.cartService.getCart();
    this.userEmail = this.firebaseService.userDetails().email;
    this.userID = this.firebaseService.userDetails().uid;
    this.recipeName  = this.idea.name;

    this.firebaseService. readComment().subscribe(data =>{
      this.chat = data.map(e => {
        return {
          id: e.payload.doc.id,
          // isEdit: false,
          email: e.payload.doc.data()['email'],
          authid: e.payload.doc.data()['authid'],
          comment: e.payload.doc.data()['comment'],
          recipeName: e.payload.doc.data()['recipeName'],
        };
      })
      console.log(this.chat);
    })
    
   }

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.ideaService.getIdea(id).subscribe(idea => {
        this.idea = idea;
      });
    }
  }
 
  addIdea() {
    this.ideaService.addIdea(this.idea).then(() => {
      this.router.navigateByUrl('/idea-list');
      this.showToast('recipe added to the feed');
    }, err => {
      this.showToast('There was a problem adding your recipe. ');
    });
  }
 
  deleteIdea() {
    this.ideaService.deleteIdea(this.idea.id).then(() => {
      this.router.navigateByUrl('/idea-list');
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

  delIngredient(ingredientID){
    this.idea.ingredients.splice(ingredientID,1);
  }

  // addIngredient(){
  // if (this.idea.ingredients.length > 0) {
  //   let task = this.idea.ingredients;
  //   this.ingredients.ingredients.push({"ingredients": "" });
  
  //   }
  // }

  addToCart(ingredient){
    this.showToast('added to cart!');
    // let ingredients = this.idea.ingredients;
    this.cartService.addCart(ingredient);

    let data={};
    data = ingredient;
  
    for(var i=0; i < data; i++){
    data['name'] = this.idea.ingredients[i].name;
    data['price'] = this.idea.ingredients[i].price;
   
    }
  

    this.firebaseService.create_grocerylist(data).then(resp => {
      ingredient = [{
        name: '',
        price: undefined
      }];
      
      
      console.log(resp);
      // this.navCtrl.navigateBack('/gr')
    })
      .catch(error => {
        console.dir(error);
      });
      
    // this.cartService.cartCount = this.cartService.cartCount+1;
    // this.cartCount = this.cartService.cartCount;
    }

    openCart(){
      this.router.navigate(['grocerylist']);
    }
  
  showToast(msg) {
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

  CreateComment() {
    let record = {};
    record['comment'] = this.comment;
    record['email'] = this.userEmail;
    record['authid'] = this.userID;
    record['recipeName'] = this.recipeName;
    this.firebaseService.create_comment(record).then(resp => {
      this.userID;
      this.userEmail;
      this.comment;
      this.recipeName;
      console.log(resp);
    })
      .catch(error => {
        console.dir(error);
      });
  }
 }
