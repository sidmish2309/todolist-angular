import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class FormService{
 allTasks:FormGroup[]=[];
 importantTasks:FormGroup[]=[];
 deletedTasks:FormGroup[]=[];
 completedTasks:FormGroup[]=[];


 addTask(index: number, taskform: FormGroup): void {
  if (index >= 0 && index < this.allTasks.length)  this.allTasks[index] = taskform;
   else this.allTasks.push(taskform);
  
}

getTaskByIndex(index: number): FormGroup {
  return this.allTasks[index];
}

// getAllTasks(): void {
//   console.log(this.allTasks);
// }
 
}

