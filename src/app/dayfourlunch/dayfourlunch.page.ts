import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dayfourlunch',
  templateUrl: './dayfourlunch.page.html',
  styleUrls: ['./dayfourlunch.page.scss'],
})
export class DayfourlunchPage implements OnInit {

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
