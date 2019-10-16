import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  
  // zoom = 10;
  // public lat = 4.94029;
  // public lng = 114.94806;
  // public latitude = 4.881334;
  // public longitude: 114.9485032;
  // public markerUrl = '../../assets/icon/marker.png';
  //<div>Icons made by <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">turkkub</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
  // public origin: any;


  // constructor(public geolocation: Geolocation,) {
    
  // }

  title: string = 'My first AGM project';
  lat: number = 4.94029;
  lng: number = 114.94806;
  height = 0;

  constructor(public platform: Platform){
    console.log(platform.height());
    this.height = platform.height() - 56;
  }
  

  ngOnInit() {}
//     this.getDirection();
//     this.getSecondDirection();
//     console.log('ngonit');
//   }

//   mapReady(a, event){
//     if(event)
// {
//   console.log('event if');
// } 
//   } 
  
//   getDirection(){
//     console.log('directions');
//     this.origin = { lat:26.857114, lng: 75.8127086};
//     console.log('origin', this.origin);
//   }

//   getSecondDirection(){
//     console.log('directions');
//     this.origin = { lat:4.881334, lng: 114.9485032};
//     console.log('origin', this.origin);
//   }
}
