import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.page.html',
  styleUrls: ['./adminpage.page.scss'],
})
export class AdminpagePage implements OnInit {
 
  @ViewChild('slides', {static: false}) slider: IonSlides;
  segment = 0;
  
  constructor() { }

  ngOnInit() {
  }

   //slides
   async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}
