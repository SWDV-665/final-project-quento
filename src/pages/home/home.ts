import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
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
    return this.dataService.getWorkout();
  }

  removeWorkout(workout, index){
    // Show item removal message (toast)
    const toast = this.toastCtrl.create({
      message: 'Deleting - ' + workout.name + " ...",
      duration: 3000
    });
    toast.present();

    // Use Groceries Provider to remove item
    this.dataService.removeWorkout(index);
  }

  editWorkout(workout, index){

  }

  addWorkout(){

  }

  viewWorkout(workout, index){
    console.log("workout view clicked => " + workout.name);
    this.openWorkoutModal(workout, index);
    //this.navCtrl.push(ModalPage);
  }

  openWorkoutModal(workout, index) {
    let workoutModal = this.modalCtrl.create(ModalPage, {index, workout});
    workoutModal.present();    
  }
}
