import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
export interface Image {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.page.html',
  styleUrls: ['./create-location.page.scss'],
})
export class CreateLocationPage implements OnInit {

  // Upload Task 
task: AngularFireUploadTask;
 
// Progress in percentage
percentage: Observable<number>;

// Snapshot of uploading file
snapshot: Observable<any>;

// Uploaded File URL
UploadedFileURL: Observable<string>;

//Uploaded Image List
images: Observable<Image[]>;

 //File details  
 fileName:string;
 fileSize:number;

 //Status check 
 isUploading:boolean;
 isUploaded:boolean;
  locationName: string;
  address: string;
  description: string;
  menu: string;
  latitude: number;
  longitude: number;
  locationForm: FormGroup;
  private imageCollection: AngularFirestoreCollection<Image>;

  constructor(
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage, private database: AngularFirestore
  ) { 
  
  }

  ngOnInit() {
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      
    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }

    this.imageCollection = this.database.collection<Image>('locationN');
    this.images = this.imageCollection.valueChanges();

  }

  CreateLocation() {
    let data = {};
    data['locationName'] = this.locationName;
    data['address'] = this.address;
    data['description'] = this.description;
    data['menu'] = this.menu;
    data['latitude'] = this.latitude;
    data['longitude'] = this.longitude;
    this.firebaseService.create_location(data).then(resp => {
      this.locationName = "";
      this.address = "";
      this.description = "";
      this.latitude = undefined;
      this.longitude = undefined;
      console.log(resp);
      this.navCtrl.navigateBack('/adminpage')
    })
      .catch(error => {
        console.dir(error);
      });
  }

  uploadFile(event: FileList) {
    
 
    // The File object
    const file = event.item(0)
 
    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( ')
     return;
    }
 
    this.isUploading = true;
    this.isUploaded = false;
 
 
    this.fileName = file.name;
 
    // The storage path
    const path = `healthbit/${new Date().getTime()}_${file.name}`;
 
    // Totally optional metadata
    const customMetadata = { app: 'Freaky Image Upload Demo' };
 
    //File reference
    const fileRef = this.storage.ref(path);
 
    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });
 
    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();
        
        this.UploadedFileURL.subscribe(resp=>{
          this.addImagetoDB({
            name: file.name,
            filepath: resp,
            size: this.fileSize
          });
          this.isUploading = false;
          this.isUploaded = true;
        },error=>{
          console.error(error);
        })
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    )
  }

  addImagetoDB(image: Image) {
    //Create an ID for document
    const id = this.database.createId();
 
    //Set document id with value in database
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }

}
