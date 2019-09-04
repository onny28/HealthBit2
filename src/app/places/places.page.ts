import { Component, OnInit } from '@angular/core';
import { LocationService, Location } from '../location.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  private locations: Observable<Location[]>;

  constructor(private locationService: LocationService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.locations = this.locationService.getLocations();
  }

  goToLocationDetails(){
    this.navCtrl.navigateForward('/locationdetail/:id')
  }

}
