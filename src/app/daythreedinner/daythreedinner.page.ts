import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-daythreedinner',
  templateUrl: './daythreedinner.page.html',
  styleUrls: ['./daythreedinner.page.scss'],
})
export class DaythreedinnerPage implements OnInit {
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
