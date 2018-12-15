import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  workout;
  constructor(public navCtrl: NavController, public params: NavParams, public dataService: WorkoutServiceProvider, public platform: Platform, public viewCtrl: ViewController) {
    this.workout = this.params.get('workout');
    console.log("workout name => " + this.workout);
   
  }
  dismiss() {
      this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
