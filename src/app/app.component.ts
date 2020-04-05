import { ScrollAlertDirective } from './scroll-alert.directive';
import { Component, Directive, HostListener } from '@angular/core';

import {ActionSheetController} from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController,
    private actionSheetController: ActionSheetController,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    console.log('Scrolled');
  }

async showAlert() {
  const alert = await this.alertController.create({
    header: 'This ones isnt on the List!',
    subHeader: 'Well to the block with the rest of them',
    message: 'Im sorry, wrong place wrong time',
    buttons: ['Uh-oh']
  });

  await alert.present();
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

