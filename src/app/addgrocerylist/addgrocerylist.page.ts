import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/firebase.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addgrocerylist',
  templateUrl: './addgrocerylist.page.html',
  styleUrls: ['./addgrocerylist.page.scss'],
})
export class AddgrocerylistPage implements OnInit {
   name: string;
   price: number;
   userEmail: string;
   userID: string;
  constructor(
    private firebaseService: FirebaseService,
    private navCtrl: NavController,) { }

  ngOnInit() {
    this.userEmail = this.firebaseService.userDetails().email;
    this.userID = this.firebaseService.userDetails().uid;
  }

  CreateGroceryList(){
    let data= {};
    data['name'] = this.name;
    data['price'] = this.price;
    data['authid'] = this.userID;
    data['email'] = this.userEmail;
    this.firebaseService.create_grocerylist(data).then(resp =>{
      this.name = "";
      this.price = undefined;
      this.userID;
      this.userEmail;
      console.log(resp);
      this.navCtrl.navigateBack('/tabs/tabs/grocerylist')
    })
      .catch(error => {
        console.dir(error);
      });
  }
    

}
