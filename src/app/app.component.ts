import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GooglePlus } from '@ionic-native/google-plus';

import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public googlePlus: GooglePlus, public zone: NgZone) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.zone.run(() => {
        this.checkLogin();
      });      
    });
  }
  async checkLogin(){
    try {
      let status = await this.googlePlus.trySilentLogin({});
      console.log("User Found");
      this.rootPage = WelcomePage;
    } catch (error) {
      console.log("User Not Found");
      this.rootPage = HomePage;
    }
  }
  
}

