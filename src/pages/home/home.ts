import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { ModalPage } from '../modal/modal';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title : string;
  workouts = [];
  errorMessage: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: WorkoutServiceProvider,public modalCtrl: ModalController, public dialogService: InputDialogServiceProvider, public socialSharing: SocialSharing) {
    this.title = "Workout Route";

    // Subscribing to observable to know when data changes.
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadWorkouts();
    });
    
  }

  ionViewDidLoad(){
    this.loadWorkouts();
  }

  // Get initial list of workouts from the provider when the app loads.
  loadWorkouts(){
    //return this.dataService.getWorkouts();
    this.dataService.getWorkouts().subscribe(
      workouts => this.workouts = workouts,
      error => this.errorMessage = <any>error
    );
  }

  removeWorkout(workout, index){
    // Show item removal message (toast)
    const toast = this.toastCtrl.create({
      message: 'Deleting - ' + workout.name + " ...",
      duration: 3000
    });
    toast.present();

    // Use Groceries Provider to remove item
    this.dataService.removeWorkout(workout._id);
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
    this.dialogService.showPrompt(workout, index, workout._id);
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
