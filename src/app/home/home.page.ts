import { Component, ViewChild, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
woof: any = console.log('woofs');

  constructor(public actionSheetController: ActionSheetController) {}

 
 


  @Output() bark = new EventEmitter<{}>();
    scrollHandler(event) {
      
      console.log('scroll');

    }

  onBark() {

    this.bark.emit(this.woof)
  }

 async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }


}
