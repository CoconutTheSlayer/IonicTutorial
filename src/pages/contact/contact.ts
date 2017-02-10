import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
    items = [];
    pagination = 30;

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < this.pagination; i++) {
      this.items.push(this.items.length);
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
        for (let i = 0; i < this.pagination; i++) {
            this.items.push(this.items.length);
        }

        console.log('Async operation has ended', this.items.length);
        infiniteScroll.complete();
    }, 500);
  }

  order(item) {
      console.log('order', item);
  }

  info(item) {
      console.log('info', item);
  }
}
