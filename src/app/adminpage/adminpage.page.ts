import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, LoadingController } from '@ionic/angular';
import { FirebaseService } from 'app/firebase.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { Idea, IdeaService } from 'app/services/idea.service';



@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.page.html',
  styleUrls: ['./adminpage.page.scss'],
})
export class AdminpagePage implements OnInit {


  users:any;
  gender: string;
  age: number;
  weight: number;
  height: number;
  role: string;
  userEmail: string;
  userID: string;

  locationName: string;
  address: string;
  location: any;
  chat;
 
  @ViewChild('slides', {static: false}) slider: IonSlides;
  segment = 0;
  
  loader: HTMLIonLoadingElement;
  loading: boolean;

  public ideas: Observable<Idea[]>;
 
  constructor(
    public ideaService: IdeaService,
    public firebaseService: FirebaseService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
  ) { }
 
  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      this.loadingFunction('Loading...')
      this.userID = this.firebaseService.userDetails().uid;
      this.userEmail = this.firebaseService.userDetails().email;

        this.firebaseService.listUsers().subscribe(data => {
   
          this.users = data.map(e => {
            return {
              id: e.payload.doc.id,
              isEdit: false,
              email: e.payload.doc.data()['email'],
              authid: e.payload.doc.data()['authid'],
              role: e.payload.doc.data()['role'],
              gender: e.payload.doc.data()['gender'],
              age: e.payload.doc.data()['age'],
              weight: e.payload.doc.data()['weight'],
              height: e.payload.doc.data()['height'],
            };
          })
          this.loaderDismiss();
          console.log(this.users);
        });

        this.firebaseService.read_location().subscribe(data => {
   
          this.location= data.map(e => {
            return {
              id: e.payload.doc.id,
              isEdit: false,
              locationName: e.payload.doc.data()['locationName'],
              address: e.payload.doc.data()['address'],
              latitude: e.payload.doc.data()['latitude'],
              longitude: e.payload.doc.data()['longitude'],
            };
          })
          this.loaderDismiss();
          console.log(this.location);
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

   //slides
   async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  //user

  EditRecord(record) {
    record.isEdit = true;
    record.EditRole = record.role;
    record.EditGender = record.gender;
    record.EditAge = record.age;
    record.EditWeight = record.weight;
    record.EditHeight = record.height;
  }

 
  UpdateRecord(recordRow) {
    let record = {};
    record['role'] = recordRow.EditRole;
    record['gender'] = recordRow.EditGender;
    // record['dob'] = recordRow.EditDOB;
    record['age'] = recordRow.EditAge;
    record['weight'] = recordRow.EditWeight;
    record['height'] = recordRow.EditHeight;
    this.firebaseService.update_User(recordRow.id, record);
    recordRow.isEdit = false;
  }

  RemoveRecord(rowID) {
    this.firebaseService.delete_userData(rowID);
  }

  //location

  EditLocation(data) {
    data.isEdit = true;
    data.EditLocationName = data.locationName;
    data.EditAddress = data.address;
    data.EditLatitude = data.latitude;
    data.EditLongitude = data.longitude;
  }

 
  UpdateLocation(dataRow) {
    let data = {};
    data['locationName'] = dataRow.EditLocationName;
    data['address'] = dataRow.EditAddress;
    data['latitude'] = dataRow.EditLatitude;
    data['longitude'] = dataRow.EditLongitude;
    this.firebaseService.update_location(dataRow.id, data);
    dataRow.isEdit = false;
  }

  RemoveLocation(rowID) {
    this.firebaseService.delete_location(rowID);
  }

  RemoveComment(rowID) {
    this.firebaseService.delete_comment(rowID);
  }

  logout(){
    this.firebaseService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }

}
