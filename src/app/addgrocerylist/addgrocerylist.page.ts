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
  constructor(
    private firebaseService: FirebaseService,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }

  CreateGroceryList(){
    let data= {};
    data['name'] = this.name;
    data['price'] = this.price;
    this.firebaseService.create_grocerylist(data).then(resp =>{
      this.name = "";
      this.price = undefined;
      console.log(resp);
      this.navCtrl.navigateBack('/tabs/tabs/grocerylist')
    })
      .catch(error => {
        console.dir(error);
      });
  }
    

}
