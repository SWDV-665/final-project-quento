import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title : string;

  errorMessage: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: WorkoutServiceProvider,public modalCtrl: ModalController, public dialogService: InputDialogServiceProvider) {
    this.title = "Workout Route";
    
  }

  loadWorkouts(){
    return this.dataService.getWorkouts();
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
    // Troubleshooting
    console.log("Edit workout .." + workout.name, index);
        
    // Show item removal message (toast)
    const toast = this.toastCtrl.create({
      message: 'Editing - ' + workout.name + " ...",
      duration: 3000
    });
    toast.present();

    // Edit item from items array    
    this.dialogService.showPrompt(workout, index);
  }

  addWorkout(){
    this.dialogService.showPrompt();
  }

  viewWorkout(workout, index){
    console.log("workout view clicked => " + workout.name);
    this.openWorkoutModal(workout, index);
    //this.navCtrl.push(ModalPage,{workout});
  }

  openWorkoutModal(workout, index) {
    let workoutModal = this.modalCtrl.create(ModalPage, {index, workout});
    workoutModal.present();    
  }
}
