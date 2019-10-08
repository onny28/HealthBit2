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
 
  @ViewChild('slides', {static: false}) slider: IonSlides;
  segment = 0;
  
  loader: HTMLIonLoadingElement;
  loading: boolean;

  private ideas: Observable<Idea[]>;
 
  constructor(
    private ideaService: IdeaService,
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
  ) { }
 
  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      this.loadingFunction('Loading...')
      // this.userID = this.firebaseService.userDetails().uid;
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
            };
          })
          this.loaderDismiss();
          console.log(this.location);
        });
      
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

  // RemoveRecord(rowID) {
  //   this.firebaseService.delete_User(rowID);
  // }

  //location

  EditLocation(data) {
    data.isEdit = true;
    data.EditLocationName = data.locationName;
    data.EditAddress = data.address;
  }

 
  UpdateLocation(dataRow) {
    let data = {};
    data['locationName'] = dataRow.EditLocationName;
    data['address'] = dataRow.EditAddress;
    this.firebaseService.update_location(dataRow.id, data);
    dataRow.isEdit = false;
  }

  RemoveLocation(rowID) {
    this.firebaseService.delete_location(rowID);
  }

}
