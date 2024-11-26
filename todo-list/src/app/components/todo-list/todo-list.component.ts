import { Component } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: string[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim());
      this.newTodo = '';
      this.updateTodos();
    }
  }

  deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
    this.updateTodos();
  }

  private updateTodos() {
    this.todos = this.todoService.getTodos();
  }
}
