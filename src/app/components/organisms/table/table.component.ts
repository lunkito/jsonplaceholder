import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  
  @Input()
  private data: object[];
  
  public keys: string[];
  public rows: object[];

  // Al inicio se llama antes de iniciar this.data (undefined)
  // ¿Tiene que ver con que es un input y solo se chequean despues de construir el view tree o algo asi?
  ngOnChanges() {
    if (this.data) {
      this.resetProps();
      this.convertDataToProps();
    }
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
