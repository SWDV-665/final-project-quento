import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

import { WelcomePage } from '../../pages/welcome/welcome';
import { SignupPage } from '../../pages/signup/signup';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public googlePlus: GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    // Assume they signed in.
    this.navCtrl.push(HomePage);
  }

  loginGoogle(){
    this.googlePlus.login({})
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }
}
