// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WorkoutServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WorkoutServiceProvider {

  

  workouts : Array<{
      name: string,
      sets: number,
      description: string,
      exercises: Array<{
          name: string,
          reps: number
        }>      
    }>;

  constructor() {
    console.log('Hello WorkoutServiceProvider Provider');
    
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

}
