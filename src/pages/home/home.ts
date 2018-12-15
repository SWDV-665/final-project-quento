import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title : string;

  errorMessage: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: WorkoutServiceProvider,public modalCtrl: ModalController) {
    this.title = "Workout Route";
    
  }

  loadWorkouts(){
    return this.dataService.workouts;
  }

  removeWorkout(workout, index){

  }

  editWorkout(workout, index){

  }

  addWorkout(){

  }

  viewWorkout(workout, index){
    console.log("workout view clicked => " + workout.name);
    // this.openWorkoutModal(workout);
    this.navCtrl.push(ModalPage);
  }

  openWorkoutModal(workout) {
    let workoutModal = this.modalCtrl.create(ModalPage, workout);
    workoutModal.present();    
  }

}
