import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
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
  workoutIndex;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public params: NavParams, public dataService: WorkoutServiceProvider, public platform: Platform, public viewCtrl: ViewController, public dialogService: InputDialogServiceProvider, public socialSharing: SocialSharing) {
    this.workout = this.params.get('workout');
    this.workoutIndex = this.params.get('index');
    console.log("workout name => " + this.workout.name + " Workout Index => " + this.workoutIndex);
   
  }

  dismiss() {
      this.viewCtrl.dismiss();
  }

  addExercise(){    
    console.log("Add Exercise Clicked =>  workout index [" + this.workoutIndex + "]");
    this.dialogService.showExercisePrompt(this.workoutIndex);
  }

  editExercise(exercise, index){
    console.log("Edit  " + exercise.name + " index " + index + " workout index " + this.workoutIndex );
    //this.dataService.workouts[this.workoutIndex].editExercise(exercise,index);
    this.dialogService.showExercisePrompt(this.workoutIndex,exercise, index);
  }

  removeExercise(exercise, index){

    console.log("delete " + exercise.name + " index " + index + " workout index " + this.workoutIndex );

    // Show item removal message (toast)
    const toast = this.toastCtrl.create({
      message: 'Deleting - ' + exercise.name + " ...",
      duration: 3000
    });
    toast.present();
    
    // Use Groceries Provider to remove item
    this.dataService.workouts[this.workoutIndex].removeExercise(exercise, index);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  shareExercise(exercise, index){
    console.log("Shared successfully");
    let message = "Exercise - Name: " + exercise.name + " - Reps: " + exercise.reps;
    let subject = "Shared via WorkoutRoute app";
    // Share an item    
    this.socialSharing.share(message,subject).then(() => {
      console.log("Shared successfully");
      // Show action notification
      this.showToast("Shared successfully", exercise, index);
    }).catch((error) => {
      console.error("Error while sharing ", error);
      // Show action notification
      this.showToast("Share Error!", exercise, index);
    });
  }

  showToast(itemAction, itemObj, id){
    // Show a toast message to Troubleshoot action occurrance.
    console.log(itemAction + " item .." , id, itemObj._id);
    
    // Show item action message (toast)
    const toast = this.toastCtrl.create({
      message: itemAction + ' item - ' + itemObj.name + " ...",
      duration: 3000
    });
    toast.present();
  }

}
