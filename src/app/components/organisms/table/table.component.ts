import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  public data: object[];
  public keys: string[];
  public rows: object[] = [];
  public columns: string[];


  constructor() { }

  ngOnInit() {
    // array users
    console.log(this.data);

    this.data.forEach(element => {
      this.keys = Object.keys(element);
      this.rows.push(element);
    });

    console.log(this.rows);
    

  }

}
