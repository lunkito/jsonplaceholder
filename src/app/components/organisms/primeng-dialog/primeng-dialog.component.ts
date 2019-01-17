import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primeng-dialog',
  templateUrl: './primeng-dialog.component.html',
  styleUrls: ['./primeng-dialog.component.css']
})
export class PrimengDialogComponent {

  @Input()
  public text: string;
  public display = false;

  showDialog() {
    this.display = true;
  }

}
