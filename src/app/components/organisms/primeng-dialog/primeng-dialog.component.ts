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
  public visible = false;

  @Output()
  public visibleChange: EventEmitter<boolean> = new EventEmitter();

  toggleDialog() {
    this.visible = !this.visible;
    this.visibleChange.emit(this.visible);
  }

}
