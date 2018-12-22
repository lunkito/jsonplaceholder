import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { JsonService } from 'src/app/services/json.service';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: Todo[];

  constructor(private service: JsonService) {}

  ngOnInit() {
    this.getTodos();
  }

  private getTodos() {
    this.service.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo(input: HTMLInputElement) {
    if (this.hasValue(input)) {
      const todo = new Todo();
      todo.title = input.value;
      this.todos.unshift(todo);
    }
    input.value = '';
  }

  private hasValue(input: HTMLInputElement) {
    return input.value !== null && input.value !== '';
  }

  delete(todo: Todo) {
    this.service.deleteTodoById(todo.id)
      .pipe(
        catchError(error =>  throwError(error)),
        finalize(() => this.todos = this.todos.filter(iteration => iteration !== todo))
      )
      .subscribe();
  }

  deleteAll() {
    this.todos = [];
  }
}
