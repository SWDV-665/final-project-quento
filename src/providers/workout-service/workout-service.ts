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

  exercises: Array<{
      name:string,
      desc: string
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

    this.exercises = [
      {
        name: "Push Ups",
        desc: "Place your hands on the floor so they’re slightly outside shoulder-width. Spread your fingers slightly out and have them pointed forward. Raise up onto your toes so that all of your body weight is on your hands and your feet.Bend your elbows and lower your chest down toward the floor. Once your elbows bend slightly beyond 90 degrees, push off the floor and extend them so that you return to starting position."
      },
      {
        name: "Sit ups",
        desc: "Lie flat on your back, lifts the torso to a sitting position, and then lie flat again without changing the position of the legs: formerly done with the legs straight but now usually done with the knees bent. "
      },
      {
        name: "Squats",
        desc: "From a standing position. Bend your knees keeping your back straight. Stop when your thights are perpendicular to the flow. Slowly rise back to standing position."
      }
    ];
  }

  getWorkout(){
    return this.workouts;
  }

  removeWorkout(index){
    this.workouts.splice(index, 1);
  }

  addWorkout(workout){
    this.workouts.push(workout);
  }

  editWorkout(workout, index){
    this.workouts[index] = workout;
  }
}
