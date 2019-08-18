import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dayonelunch',
  templateUrl: './dayonelunch.page.html',
  styleUrls: ['./dayonelunch.page.scss'],
})
export class DayonelunchPage implements OnInit {
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
