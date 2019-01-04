import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  @Input()
  private data: object[];
  
  public keys: string[] = [];
  public rows: object[] = [];

  ngOnChanges() {
    this.resetProps();
    this.convertDataToProps();
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
