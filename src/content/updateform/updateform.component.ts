import { Component, Input} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormService } from '../../app/service/formservice';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateform',
  standalone: true,
  imports: [CommonModule,NgIf,ReactiveFormsModule],
  templateUrl: './updateform.component.html',
  styleUrl: './updateform.component.css'
})

export class UpdateformComponent {
  taskForm: FormGroup;
  isFormVisible = false;
  @Input() visible = false
  @Input() currForm : FormGroup

  constructor(private formService: FormService, private fb: FormBuilder) {
    
  }

  toggleVisibility(){
    this.visible=!this.visible
  }

}
