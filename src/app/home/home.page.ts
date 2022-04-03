import { Component } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  prompEvent: any = null;

  constructor(private popover: PopoverController, private alertController: AlertController) {
    window.addEventListener(
      'beforeinstallprompt', event => {
        this.prompEvent = event;
      }
    );
  }

  openMenu(myevent: MouseEvent): void{
    this.popover.create({
      component: MenuComponent,
      showBackdrop: true,
      cssClass: 'my-menu-class',
      event: myevent,
      componentProps: {
        myprop: 'Coucou toi'
      }
    }).then((popoverElement: HTMLIonPopoverElement) => {
      popoverElement.present();
      popoverElement.onDidDismiss()
        .then((res: OverlayEventDetail<any>) => {
          console.log(res);
        });
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  onInstall() {
    this.prompEvent.promt();
  }
}

