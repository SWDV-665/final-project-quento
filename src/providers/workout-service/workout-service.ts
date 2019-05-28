 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';
/*
  Generated class for the WorkoutServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WorkoutServiceProvider {

  workouts : any = [];
  exercisesList = [];

  // Used to check if a change has occurred.
  dataChanged$: Observable<boolean>;

  private dataChangeSubject: Subject<boolean>;
  // Local
  //baseURL = "http://localhost:8080";
  // Cloud server
  baseURL = "https://workout-server.herokuapp.com";


  constructor(public http: HttpClient) {
    console.log('Hello WorkoutServiceProvider Provider');
    
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();

    this.workouts = [];
     
    this.exercisesList = [
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

  getWorkouts(): Observable<object[]> {
    return this.http.get(this.baseURL + '/api/workouts').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response){
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const err = error || '';
      errMsg = error.status + " - " + error.statusText + " " + err;      
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  removeWorkout(id){
    //this.workouts.splice(index, 1);
    this.http.delete(this.baseURL + "/api/workouts/" + id).subscribe(res => {
      this.workouts = res;
      // Trigger data change flag
      this.dataChangeSubject.next(true);
    });
  }

  addWorkout(workout){
    // create new WorkoutModel based on data entered    
    workout.exercises = [];
    var workoutObject = new WorkoutModel(workout.name, workout.sets, workout.description, workout.exercises);

    //this.workouts.push(workoutObject);
    this.http.post(this.baseURL + "/api/workouts/", workoutObject).subscribe(res => {
      this.workouts = res;
      // Trigger data change flag
      this.dataChangeSubject.next(true);
    });
    console.log("Record to add " + workout);
    console.log("Show workouts " + this.workouts);
  }

  editWorkout(workout, workoutId){
    //this.workouts[index] = workout;
    
    this.http.put(this.baseURL + "/api/workouts/" + workoutId, workout).subscribe(res => {
      this.workouts = res;
      this.dataChangeSubject.next(true);
      console.log("Workout updated ...")
    });
  }

  // Manipulate the exercises
  addExercise(workout, exercise){
    console.log("New exercise to save: " + exercise.name + " #" +  exercise.reps);    
    console.log("current WorkoutModel =>", JSON.stringify(workout) );
    
    workout.exercises.push({
      name: exercise.name,
      reps: exercise.reps
    });
    // Execute workout update to save changes
    this.editWorkout(workout,workout._id)    
  }

  removeExercise(workout, exercise, index){
    console.log("Before remove ", JSON.stringify(workout));
    workout.exercises.splice(index, 1);
    // Execute workout update to update exercises
    this.editWorkout(workout,workout._id)   
    console.log("Workout _id", workout._id, "\nworkout", JSON.stringify(workout));
  }

  editExercise(workout,exercise, index){
    //console.log("Current exercise: " + this.workouts[workoutIndex].exercises[index].name + " #" +  this.workouts[workoutIndex].exercises[index].reps);
    console.log("Save this exercise: " + exercise.name + " #" + exercise.reps);
    //this.workouts[workoutIndex].exercises[index] = exercise;
    console.log("Workout" + JSON.stringify(workout) + "| Exercise Index: " + index + "| Exercise:" + JSON.stringify(exercise) + "Workouts: " + JSON.stringify(this.workouts) );

  }
}

export interface IWorkout {
  name: string,
  sets: number,
  description?: string,
  exercises?: [{
      name: string,
      reps: number
  }]   

}
 
export class WorkoutModel implements IWorkout {
  //constructor(public name: string, public sets: number, public description: string, public exercises?: [{name: string, reps: number}]){
  constructor(public name: string, public sets, public description?: string, public exercises?: [{name: string, reps: number}]) {

  }

  
}