import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dayonedinner',
  templateUrl: './dayonedinner.page.html',
  styleUrls: ['./dayonedinner.page.scss'],
})
export class DayonedinnerPage implements OnInit {
  
  @ViewChild('slides', { static: false}) slider: IonSlides;

  segment = 0;
  constructor() { }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }


}
