import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from './modal';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
  ],
  entryComponents: [
    HomePage,
  ]
})
export class ModalPageModule {}
