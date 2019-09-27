import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResepiService, Resepi } from '../../services/resepi.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-resepi-details',
  templateUrl: './resepi-details.page.html',
  styleUrls: ['./resepi-details.page.scss'],
})
export class ResepiDetailsPage implements OnInit {

  resepi: Resepi = {
    name: '',
    category: '',
    steps: ''
  };
 
  constructor(private activatedRoute: ActivatedRoute, private resepiService: ResepiService,
    private toastCtrl: ToastController, private router: Router) { }
 
  ngOnInit() { }
 
  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.resepiService.getIdea(id).subscribe(resepi => {
        this.resepi = resepi;
      });
    }
  }
 
  addIdea() {
    this.resepiService.addIdea(this.resepi).then(() => {
      this.router.navigateByUrl('/resepi-list');
      this.showToast('Recipe added to the feed');
    }, err => {
      this.showToast('There was a problem adding your recipe :(');
    });
  }
 
  deleteIdea() {
    this.resepiService.deleteIdea(this.resepi.id).then(() => {
      this.router.navigateByUrl('/resepi-list');
      this.showToast('Recipe deleted');
    }, err => {
      this.showToast('There was a problem deleting your recipes :(');
    });
  }
 
  updateIdea() {
    this.resepiService.updateIdea(this.resepi).then(() => {
      this.showToast('Recipe updated');
    }, err => {
      this.showToast('There was a problem updating your resepi :(');
    });
  }
 
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}
