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
      message: workout ? "Please edit a workout" : 'Pleas add a workout',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: workout ? workout.name : null
        },
        {          
          name: 'sets',          
          placeholder: 'Sets',                             
          value: workout ? workout.set : null,          
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
          handler: item => {
            console.log('Saved clicked', item);    
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
}
