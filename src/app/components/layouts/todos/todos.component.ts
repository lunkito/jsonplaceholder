import { Component, OnInit, Inject } from '@angular/core';
import { throwError } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { JsonService } from 'src/app/services/json.service';
import { catchError, finalize } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: Todo[];

  constructor(private service: JsonService, private dialog: MatDialog) {}

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

  openDialog() {
    const dialogRef = this.dialog.open(DeletAllDialogComponent);
    dialogRef.afterClosed().subscribe(accepts => {
      if (accepts) {
        this.deleteAll();
      }
    });
  }

  deleteAll() {
    this.todos = [];
  }
}

@Component({
  selector: `app-delete-all-dialog`,
  template: `
    <mat-dialog-content>Are you sure?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
  `,
  styles: []
})
export class DeletAllDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletAllDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
