// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WorkoutServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WorkoutServiceProvider {

  workouts = [];
  exercises = [];

  // workouts : Array<{
  //     name: string,
  //     sets: number,
  //     description?: string | null,
  //     exercises?: Array<{
  //         name: string,
  //         reps: number
  //       }>  | null    
  //   }>;

  // exercises: Array<{
  //     name:string,
  //     desc: string
  //   }>;

  constructor() {
    console.log('Hello WorkoutServiceProvider Provider');
    
    this.workouts = [
      new WorkoutModel("Work Out 1",5,"1st work out created.",[
          { name: "Push ups", reps: 5 },
          {name: "Sit ups", reps: 3 },
          { name: "Jumping Jacks", reps: 8 }
        ]      
      ),
      new WorkoutModel("Work Out 2", 2, "This is the second work out. I think it will be more vigourous.",  [
          { name: "Squats", reps: 3 },
          { name: "Crunches", reps: 5 }
        ]      
      )     
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


 
export class WorkoutModel {
  constructor(public name: string, public sets: number, public description: string, public exercises: any[]){

  }

  addExercise(exercise){
    this.exercises.push({
      name: exercise.name,
      reps: exercise.reps
    });
  }

  removeExercise(exercise, index){
    this.exercises.splice(index, 1);
  }

  editExercise(exercise, index){
    console.log("Current exercise: " + this.exercises[index].name + " #" +  this.exercises[index].reps);
    console.log("Save this exercise: " + exercise.name + " #" + exercise.reps);
    this.exercises[index] = exercise;
  }
}