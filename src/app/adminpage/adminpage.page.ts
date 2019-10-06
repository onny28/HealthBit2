import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, LoadingController } from '@ionic/angular';
import { Todo, TodoService } from '../services/todo.service';
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
 
  @ViewChild('slides', {static: false}) slider: IonSlides;
  segment = 0;
  
  todos: Todo[];
  loader: HTMLIonLoadingElement;
  loading: boolean;

  private ideas: Observable<Idea[]>;
 
  constructor(
    private ideaService: IdeaService,
    private todoService: TodoService,
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,) { }
 
  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      this.loadingFunction('Loading...')
      this.userID = this.firebaseService.userDetails().uid;
      this.userEmail = this.firebaseService.userDetails().email;

      this.todoService.getTodos().subscribe(res => {
        this.todos = res;
  
        this.firebaseService.listUsers().subscribe(data => {
   
          this.users = data.map(e => {
            return {
              id: e.payload.doc.id,
              isEdit: false,
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
  // todos: Todo[];
 
  // constructor(private todoService: TodoService) { }
 
  // ngOnInit() {
  //   this.todoService.getTodos().subscribe(res => {
  //     this.todos = res;
  //   });
  // }
 
  // remove(item) {
  //   this.todoService.removeTodo(item.id);
  // }
  
 

  

   //slides
   async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  CreateRecord() {
    let record = {};
    record['authid'] = this.userID;
    record['email'] = this.userEmail;
    record['role'] = this.role;
    record['gender'] = this.gender;
    // record['dob'] = this.dob;
    record['age'] = this.age;
    record['weight'] = this.weight;
    record['height'] = this.height;
    this.firebaseService.create_NewUser(record).then(resp => {
      this.userID;
      this.userEmail;
      this.role;
      this.gender = "";
      // this.dob = undefined;
      this.age = undefined;
      this.weight = undefined;
      this.height = undefined;
      console.log(resp);
      // this.navCtrl.navigateForward('/tabs/tabs/home')
    })
      .catch(error => {
        console.dir(error);
      });
  }

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
    this.firebaseService.delete_User(rowID);
  }

}
