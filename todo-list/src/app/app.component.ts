import { Component } from '@angular/core';
import {TodoListComponent} from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    TodoListComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
