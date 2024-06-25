import { Routes } from '@angular/router';
import { CompletedComponent } from '../content/completed/completed.component';
import { HomeComponent } from '../content/home/home.component';
import { ImportantComponent } from '../content/important/important.component';
import { DeletedComponent } from '../content/deleted/deleted.component';
import { AllTasksComponent } from '../content/all-tasks/all-tasks.component';

export const routes: Routes = [
    {path:'Home', component: HomeComponent },
    {path:'Home/:id', component: HomeComponent },
    {path:'AllTasks', component: AllTasksComponent },
    {path:'Delete', component: DeletedComponent },
    {path:'Important', component: ImportantComponent },
    {path:'Complete', component: CompletedComponent },
];
