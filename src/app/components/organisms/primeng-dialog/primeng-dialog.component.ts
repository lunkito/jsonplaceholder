import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primeng-dialog',
  templateUrl: './primeng-dialog.component.html',
  styleUrls: ['./primeng-dialog.component.css']
})
export class PrimengDialogComponent {

  @Input()
  public text: string;

  @Input()
  public display = false;

  @Output()
  public eventClick: EventEmitter<boolean> = new EventEmitter();

  toggleDialog() {
    this.display = !this.display;
    this.eventClick.emit(this.display);
  }

}
