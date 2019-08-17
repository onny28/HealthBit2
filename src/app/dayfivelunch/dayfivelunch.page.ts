import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dayfivelunch',
  templateUrl: './dayfivelunch.page.html',
  styleUrls: ['./dayfivelunch.page.scss'],
})
export class DayfivelunchPage implements OnInit {
  @ViewChild('slides', {static: false}) slider: IonSlides;

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
