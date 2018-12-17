import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos$: Observable<Todo[]>;
  public todos: Todo[];

  constructor(private service: JsonService) {}

  ngOnInit() {
    this.todos$ = this.service.getTodos();
    this.service.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  delete(todo: Todo) {
    this.service.deleteTodoById(todo.id).subscribe(() => {
      this.todos = this.todos.filter(iteration => iteration.id !== todo.id);    
    });
  }
}
