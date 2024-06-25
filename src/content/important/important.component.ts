import { Component } from '@angular/core';
import { FormService } from '../../app/service/formservice';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-important',
  standalone: true,
  imports: [],
  templateUrl: './important.component.html',
  styleUrl: './important.component.css'
})



export class ImportantComponent {
  importantTask:FormGroup[]=[];

constructor(private formService: FormService) { 
  
  //copying the array so, that it will not change by reference
   this.importantTask=this.formService.allTasks.slice();

   this.importantTask.sort((a, b) => {
    const priorityA = a.get('priority').value;
    const priorityB = b.get('priority').value;
    return priorityA - priorityB;
  });

}


  
}
