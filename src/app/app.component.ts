import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes} from '@angular/router';
import { CompletedComponent } from '../content/completed/completed.component';
import { HomeComponent } from '../content/home/home.component';
import { ImportantComponent } from '../content/important/important.component';
import { DeletedComponent } from '../content/deleted/deleted.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'todoList';
}
