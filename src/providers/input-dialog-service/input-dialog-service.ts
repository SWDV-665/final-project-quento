// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { WorkoutServiceProvider } from '../../providers/workout-service/workout-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: WorkoutServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  showPrompt(workout?, index?) {
    const prompt = this.alertCtrl.create({
      title: workout ? 'Edit Item' : 'Add Workout',
      message: workout ? "Please edit a workout." : 'Please add a workout and at least one exercise.',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: workout ? workout.name : null
        },
        {          
          name: 'sets',          
          placeholder: 'Sets',                             
          value: workout ? workout.sets : null,          
        }
        ,
        {          
          name: 'description',          
          placeholder: 'Description',                             
          value: workout ? workout.description : null,          
        }
      ],           
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: workout => {
            console.log('Saved clicked', workout);    
            if (index !== undefined){
              // Edit item to array
              this.dataService.editWorkout(workout,index);
            } else {
              // Add item to array
              this.dataService.addWorkout(workout);
            }       
            
          }
        }
      ]
    });
    prompt.present();
  }

  showExercisePrompt(workoutIndex?, exercise?, index?) {
    const prompt = this.alertCtrl.create({
      title: exercise ? 'Edit exercise' : 'Add Exercise',
      message: exercise ? "Please edit an exercise." : 'Please add an exercise.',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: exercise ? exercise.name : null
        },
        {          
          name: 'reps',          
          placeholder: 'Reps',                             
          value: exercise ? exercise.reps : null,          
        },                  
      ],           
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: exercise => {
            console.log('Saved clicked', exercise, "index is " + workoutIndex, " The workout is => " +  this.dataService.workouts[workoutIndex]);    
            if (index !== undefined){
              console.log("is this correct rep# " + exercise.reps)
              // Edit item to array
             //this.dataService.editExercise(workout,index);
              this.dataService.workouts[workoutIndex].editExercise(exercise,index);
            } else {
              // Add item to array              
              //this.dataService.workouts[workoutIndex].addExercise(exercise);              
              console.log("Save new exercise in this workout '" + this.dataService.workouts[workoutIndex].name + "' workoutIndex => "+ workoutIndex)
              console.log("Exercise to save =>" + exercise.name + " reps => " + exercise.reps);
              this.dataService.workouts[workoutIndex].addExercise(exercise);
            }       
            
          }
        }
      ]
    });
    prompt.present();
  }
}
