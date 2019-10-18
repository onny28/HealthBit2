import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService, Idea } from '../../services/idea.service';
import { ToastController, IonSlides, NavController, LoadingController, ModalController } from '@ionic/angular';
import { CartService } from 'app/cart.service';
import { FirebaseService } from 'app/firebase.service';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import {DomSanitizer} from '@angular/platform-browser';

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
    calories: undefined,
    video: '',
    };
    comment: string;
    userEmail: string;
    userID: string;
    calories: number;
    chat;
    recipeName: string;
    data;
    remove;
    

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
     caloriescart = [];
     caloriesitem = undefined;
  
      //upload task
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  UploadedFileURL: Observable<string>;
  fileName:string;
  fileSize: number;
  isUploading: boolean;
  isUploaded: boolean;
  downloadURL;
  loader: HTMLIonLoadingElement;
  loading: boolean;
 
     
 
  constructor(
    private activatedRoute: ActivatedRoute, 
    private ideaService: IdeaService,
    private toastCtrl: ToastController, 
    private router: Router, 
    public navCtrl: NavController, 
    private cartService: CartService,
    private firebaseService: FirebaseService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    public loadingCtrl: LoadingController,
    private videoPlayer: VideoPlayer, public modalCtrl: ModalController,
    public  sanitizer:DomSanitizer
    ) { }
 
  ngOnInit() {
    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
      this.loadingFunction('Loading...')
      this.items=this.cartService.getIngredients();
    this.cart = this.cartService.getCart();
    this.caloriesitem = this.cartService.getCalories();
    this.caloriescart = this.cartService.getCaloriesCart();

    this.userEmail = this.firebaseService.userDetails().email;
    this.userID = this.firebaseService.userDetails().uid;
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.data = this.ideaService.getIdea(id).subscribe(data =>{
      this.recipeName = data.name;
      this.calories = data.calories;
    });


    this.firebaseService. readListComment().subscribe(data =>{
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
      this.loaderDismiss();
      console.log(this.chat);
    })

    this.firebaseService. readComment().subscribe(data =>{
      this.remove = data.map(e => {
        return {
          id: e.payload.doc.id,
          // isEdit: false,
          email: e.payload.doc.data()['email'],
          authid: e.payload.doc.data()['authid'],
          comment: e.payload.doc.data()['comment'],
          recipeName: e.payload.doc.data()['recipeName'],
        };
      })
      this.loaderDismiss();
      console.log(this.remove);
    })
      
    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }
    
    
   }

   async loadingFunction(loadmsg) {
    this.loader = await this.loadingCtrl.create({
      message: loadmsg
    })
    await this.loader.present();
 }

async loaderDismiss(){
   this.loading = await this.loadingCtrl.dismiss();
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
    data['authid'] = this.userID;
    data['email'] = this.userEmail;

    for(var i=0; i < data; i++){
    data['name'] = this.idea.ingredients[i].name;
    data['price'] = this.idea.ingredients[i].price;
   
    }
  
    this.firebaseService.create_grocerylist(data).then(resp => {
      ingredient = [{
        name: '',
        price: undefined
      }];
      this.userID;
      this.userEmail;
      
      
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

    //uploadvideos
    uploadFile(event: FileList){
      const file=event.item(0)
      if(file.type.split('/')[0] !=='video'){
        this.showToast('unsupported files!');
        console.error('unsupported file type')
        return;
      }
      this.isUploading = true;
      this.isUploaded = false;
      this.fileName = file.name;

      const path = `healthbitStorage/${new Date().getTime()}_${file.name}`;
      const customMetadata = { app: 'Healthbit upload demo'}
      const fileRef= this.storage.ref(path);
      this.task = this.storage.upload(path,file,{ customMetadata})
      this.percentage = this.task.percentageChanges();
      this.snapshot = this.task.snapshotChanges().pipe(
        finalize(() => {
          this.UploadedFileURL = fileRef.getDownloadURL();
          this.db.collection('videos').add( {videos: this.UploadedFileURL});
          // this.UploadedFileURL.subscribe(resp => {
            // this.idea.videos.push({name: file.name, filepath:resp, size:this.fileSize})
            this.isUploading=false;
            this.isUploaded = true;
        }),
          tap(snap =>{
            this.fileSize = snap.totalBytes;
          })
      )
    // }
          }

    // addVideostoDB(idea: Idea){
    //   this.ideaService.addVideotoDB(this.idea);
    // }

  
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
    //save the comments data inside the firebase
    let record = {};
    record['comment'] = this.comment;
    record['email'] = this.userEmail;
    record['authid'] = this.userID;
    record['recipeName'] = this.idea.name;
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

  RemoveComment(rowID) {
    this.firebaseService.delete_comment(rowID);
  }
  
  
  CreateCalories() {
    let data = {};
    data['calories'] = this.idea.calories;
    data['email'] = this.userEmail;
    data['authid'] = this.userID;
    data['recipeName'] = this.recipeName;
    this.firebaseService.create_calories(data).then(resp => {
      this.userID;
      this.userEmail;
      this.idea.calories;
      this.recipeName;
      console.log(resp);
    })
      .catch(error => {
        console.dir(error);
      });
  }

 }
