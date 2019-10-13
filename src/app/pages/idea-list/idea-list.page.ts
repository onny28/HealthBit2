import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from '../../services/idea.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'
import { FirebaseService } from 'app/firebase.service';
import { CartService } from 'app/cart.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.page.html',
  styleUrls: ['./idea-list.page.scss'],
})
export class IdeaListPage implements OnInit{

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
  videos: [{
    name: "",
    filepath: "",
    size: null,
  }],
  calories: null,
  video: '',
}


cart = [];


 
  constructor(private ideaService: IdeaService,
     private firestore:AngularFirestore,
     private firebaseService: FirebaseService,
     private cartService: CartService,
     private toastCtrl: ToastController,) { }
 
  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
    this.idea =this.cartService.getFavourite();
    this.cart = this.cartService.getFavCart();

   
     
  //   this.firestore.collection('recipe').valueChanges()
  //   .subscribe(ideaList => {
  //     this.ideaList = ideaList;
  //     this.loadedIdeaList = ideaList;
  // });
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

