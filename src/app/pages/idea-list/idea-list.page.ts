import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from '../../services/idea.service';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'
import { FirebaseService } from 'app/firebase.service';
import { CartService } from 'app/cart.service';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { Pipe, PipeTransform } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Pipe({
  name: 'filter'
})

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.page.html',
  styleUrls: ['./idea-list.page.scss'],
})
export class IdeaListPage implements OnInit{

  // transform(ideas: any[], filterText: string): any[] {

  //   if (!ideas) {
  //     return [];
  //   }
  //   if (!filterText) {
  //     return ideas;
  //   }
  //   filterText = filterText.toLocaleLowerCase();

  //   return ideas.filter(it => {
  //     return it.toLocaleLowerCase().includes(filterText);
  //   });
  // }

private ideas: Observable<Idea[]>;
private items: Observable<Idea[]>;
public filterText: string;
idea: Idea ={
  name:'',
  notes: '',
  ingredients: [{
    name: '',
    price: null
  }],
  steps: '',
  calories: null,
  video: '',
}

cart = [];
  loader: HTMLIonLoadingElement;
  loading: boolean;


 
  constructor(private ideaService: IdeaService,
     private firestore:AngularFirestore,
     private firebaseService: FirebaseService,
     private cartService: CartService,
     private toastCtrl: ToastController,
     private navCtrl: NavController,
     public loadingCtrl: LoadingController,) { }
 
  ngOnInit() {
    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
      this.ideas = this.ideaService.getIdeas();
      this.idea =this.cartService.getFavourite();
      this.cart = this.cartService.getFavCart();

    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }
   

   
   
     
  //   this.firestore.collection('recipe').valueChanges()
  //   .subscribe(ideaList => {
  //     this.ideaList = ideaList;
  //     this.loadedIdeaList = ideaList;
  // });
  }


   
  search($event){
    let q = $event.target.value;
  }
  

  addToFavourite(idea){
    this.showToast('added to cart!');
    // let ingredients = this.idea.ingredients;
    this.cartService.addCart(idea);

    let data={};
    data = idea;
  
    for(var i=0; i < data; i++){
    data['name'] = this.idea.name;
    data['category'] = this.idea.notes;
    data['ingredients'] = this.idea.ingredients;
    data['steps'] = this.idea.steps;
    }
    this.firebaseService.create_favourite(data).then(resp => {
      this.idea.name = "";
      this.idea.notes = "";
      this.idea.ingredients = [{
        name: '',
        price: undefined
      }];
      this.idea.steps = "";
    
      
      console.log(resp);
      // this.navCtrl.navigateBack('/gr')
    })
      .catch(error => {
        console.dir(error);
      });
  }

      showToast(msg) {
        this.toastCtrl.create({
          message: msg,
          duration: 2000
        }).then(toast => toast.present());
      }
    
    }

   
    
    
  

  // getItems(){
  //   var val = this.filterText;
  
  //   if (val && val.trim() != ""){
  //     this.ideaService.getIdeas().subscribe(p => {
  //       this.idea = p.filter(idea => {
  //         return idea.toLowerCase().indexOf(val.toLowerCase()) > -1;
  //       });
  //     });
  //   } else {
  //     this.ideaService.getIdeas().subscribe(p =>{
  //       this.idea = p;
  //     });
  //   }
  // }

  // filter(value: string): Observable<Idea[]> {
  //   return this.idea.map( idea => )
  // }

  // initializeItems(): void {
  //   this.ideaList = this.loadedIdeaList;
  // }

//   filterList(evt) {
    
  
//     const searchTerm = evt.srcElement.value;
  
//     if (!searchTerm) {
//       return;
//     }
  
//     this.ideas= this.ideas.filter(idea => {
//       if (idea.name && searchTerm) {
//         if (idea.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
//           return true;
//         }
//         return false;
//       }
//     });
// }

