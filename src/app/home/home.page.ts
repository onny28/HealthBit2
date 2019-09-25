import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { AuthenticationService } from '../services/authentication.service'
import { FirebaseService } from '../firebase.service';
import { RecipeService, Recipe } from 'app/recipe.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 

  constructor(
    private navCtrl: NavController,
    // private authService: AuthenticationService
    private firebaseService: FirebaseService, private recipeService: RecipeService
  ) {}


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
