import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input()
  private data: object[];
  
  public keys: string[] = [];
  public rows: object[] = [];

  // En vez de usar ngOnChanges, esta magia detecta los cambios en el input
  public dataToRender() {
    this.resetProps();
    this.convertDataToProps();
    return this.keys;
  }

  private convertDataToProps() {
    this.data.forEach(element => {
      this.keys = Object.keys(element);      
      this.rows.push(element);
    });
  }

  private resetProps() {
    this.rows = [];
    this.keys = [];
  }
}
