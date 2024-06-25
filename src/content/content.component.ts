import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { DeletedComponent } from './deleted/deleted.component';
import { HomeComponent } from './home/home.component';
import { ImportantComponent } from './important/important.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';



@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule, CompletedComponent, HomeComponent, DeletedComponent, ImportantComponent, AllTasksComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
