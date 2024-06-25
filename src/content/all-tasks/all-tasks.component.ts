import { Component, OnInit } from '@angular/core';
import { FormService } from '../../app/service/formservice';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateformComponent } from '../updateform/updateform.component';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,UpdateformComponent],
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent {

  updateForm  :FormGroup
  visibleUpdate = false
  allTasks: FormGroup[] = [];
  
  
  taskArray! : []

  constructor(private formService: FormService, private route: Router) {
    this.allTasks=this.formService.allTasks;
  }

  redirectTOEditForm(index:number){
    console.log(index); 
  }

Delete(index:number){
     this.formService.deletedTasks.push(this.allTasks[index]);
     this.allTasks.splice(index,1);
     this.formService.allTasks=this.allTasks;
 }

Complete(index:number){
  this.formService.completedTasks.push(this.allTasks[index]);
  this.allTasks.splice(index,1);
  this.formService.allTasks=this.allTasks;

}

toggleUpdate(index : number){
  this.route.navigate([`/Home/${index}`]);

  // this.visibleUpdate = !this.visibleUpdate;
  // this.updateForm = this.allTasks[index];
 }

}
