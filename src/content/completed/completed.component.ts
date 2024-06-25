import { Component } from '@angular/core';
import { FormService } from '../../app/service/formservice';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [],
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.css'
})
export class CompletedComponent {

  completetask:FormGroup[]=[];

  constructor(private formService: FormService) { 
  
    //copying the array so, that it will not change by reference
     this.completetask=this.formService.completedTasks.slice();
     
}

  Delete(index:number){
    this.completetask.splice(index,1);
  this.formService.completedTasks.splice(index,1);
  }
}
