import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from '../../app/service/formservice';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  taskForm: FormGroup;
  isFormVisible = false;

  constructor(private formService: FormService, private fb: FormBuilder, private route:ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.initForm();

    this.route.params.subscribe(params => {
      const taskIndex = +params['id']; // Convert the 'id' parameter to a number
      if (!isNaN(taskIndex)) {
        this.loadTask(taskIndex);
      }
    });
  }

  initForm(): void {
    // Initialize the task form
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      priority: [0, Validators.required]
    });
  }

  toggleFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  loadTask(index: number): void {
    const taskForm = this.formService.getTaskByIndex(index);
    if (taskForm) {
      this.taskForm.patchValue(taskForm.value);
      this.isFormVisible = true; // Show the form with patched values
    }
  }

  addTask(): void {
    if (this.taskForm.valid) {
      const taskIndex = (this.route.snapshot.params['id'])  ? +this.route.snapshot.params['id'] : this.formService.allTasks.length;
      this.formService.addTask(taskIndex, this.taskForm);
      this.isFormVisible = false; // Hide the form after adding/updating the task
      // this.formService.getAllTasks();
      // console.log(this.formService.allTasks);
    }
  }

 
}
