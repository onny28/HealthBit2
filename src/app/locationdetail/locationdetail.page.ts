import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LocationService, Location } from '../location.service';

@Component({
  selector: 'app-locationdetail',
  templateUrl: './locationdetail.page.html',
  styleUrls: ['./locationdetail.page.scss'],
})
export class LocationdetailPage implements OnInit {

  location: Location = {
    name: '',
    address: '',
  };

  constructor(private activatedRoute: ActivatedRoute, private locationService: LocationService,
    private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get();
    if (id) {
      this.locationService.getLocation(id).subscribe(location => {
        this.location = location;
      });
    } 
  }

  addLocation() {
    this.locationService.addLocation(this.location). then(() => {
      this.router.navigateByUrl('/places');
      this.showToast('Location added');
    }, err => {
      this.showToast('There was a problem adding your location :(');
    });
  }

  deleteLocation() {
    this.locationService.deleteLocation(this.location.id).then(() => {
      this.router.navigateByUrl('/places');
      this.showToast('Location deleted');
    }, err => { 
      this.showToast('There was a problem deleting your location :('); 
    });
  }

  updateLocation() {
    this.locationService.updateLocation(this.location).then(()=> {
      this.showToast('Location updated');
    }, err => {
      this.showToast('There was a problem updating your location :(');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
