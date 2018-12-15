import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title : string;

  workouts : Array<{
      name: string,
      sets: number,
      description: string,
      exercises: Array<{
          name: string,
          reps: number
        }>      
    }>;

  errorMessage: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
    this.title = "Workout Route";
    this.workouts = [
      {
        name: "Work Out 1",
        sets: 5,
        description: "1st work out created.",
        exercises: [
          {
            name: "Push ups",
            reps: 5
          },
          {
            name: "Sit ups",
            reps: 3
          },
          {
            name: "Jumping Jacks",
            reps: 8
          }
        ]      
      },
      {
        name: "Work Out 2",
        sets: 2,
        description: "This is the second work out. I think it will be more vigourous.",
        exercises: [
          {
            name: "Squats",
            reps: 3
          },
          {
            name: "Crunches",
            reps: 5
          }
        ]      
      }
    ];
  }

  loadWorkouts(){
    return this.workouts;
  }

  removeWorkout(workout, index){

  }

  editWorkout(workout, index){

  }

  addWorkout(){

  }

  viewWorkout(workout, index){
    console.log("workout view clicked => " + workout);
  }
}
