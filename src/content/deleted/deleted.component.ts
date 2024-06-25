import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../app/service/formservice';

@Component({
  selector: 'app-deleted',
  standalone: true,
  imports: [],
  templateUrl: './deleted.component.html',
  styleUrl: './deleted.component.css'
})

export class DeletedComponent {

  deleteTasks:FormGroup[]=[];

  constructor(private formService: FormService) { 
  
    //copying the array so, that it will not change by reference
     this.deleteTasks=this.formService.deletedTasks.slice();
     
}

Delete(index:number){
  this.deleteTasks.splice(index,1);
  this.formService.deletedTasks.splice(index,1);
}

Restore(index:number){
  this.formService.allTasks.push(this.deleteTasks[index]);
  this.deleteTasks.splice(index,1);
  this.formService.deletedTasks.splice(index,1);


}

}
