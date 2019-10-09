import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/Rx';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // private theme: BehaviorSubject<String>;
   renderer: Renderer2;
  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    // this.theme = new BehaviorSubject('dark-theme');
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  // setActiveTheme(val){
  //   this.theme.next(val);
  // }

  // getActiveTheme(){
  //   return this.theme.asObservable();
  // }

  enableDark(){
    this.renderer.addClass(this.document.body, 'dark-theme');
  }

  enableLight(){
    this.renderer.removeClass(this.document.body, 'dark-theme');
  }

//   setActiveTheme(val) {
//     this.theme.next(val);
//   }

//   getActiveTheme() {
//     return this.theme.asObservable();
//   }
// }
}
