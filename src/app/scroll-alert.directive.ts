import { Directive,Input, HostBinding } from '@angular/core';
import { IonVirtualScroll } from '@ionic/angular';
import { Scroll } from '@angular/router';

@Directive({
  selector: '[appScrollAlert]', //attribute selector
 
})
export class ScrollAlertDirective {

  constructor() {
      console.log('Hello ScrollAlertDirective Directive'); }


  onContentScroll(event){
    console.log(event);
  }
}
