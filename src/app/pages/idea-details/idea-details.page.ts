import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService, Idea } from '../../services/idea.service';
import { ToastController, IonSlides, NavController } from '@ionic/angular';
 
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
    ingredients: ['']
    };

    ingredients =[];

 @ViewChild('slides', {static: false}) slider: IonSlides;
     segment = 0;
 
  constructor(private activatedRoute: ActivatedRoute, private ideaService: IdeaService,
    private toastCtrl: ToastController, private router: Router, public navCtrl: NavController) { }
 
  ngOnInit() { }
 
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
  if (this.idea.ingredients.length > 0) {
    let task = this.idea.ingredients;
    this.ingredients.push(task);
    this.idea.ingredients = this.ingredients;
    }
  }

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
}
