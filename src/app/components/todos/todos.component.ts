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

  constructor(private service: JsonService) {}

  ngOnInit() {
    this.todos$ = this.service.getTodos();
  }
}
