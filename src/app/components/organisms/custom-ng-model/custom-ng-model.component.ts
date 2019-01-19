import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-ng-model',
  templateUrl: './custom-ng-model.component.html',
  styleUrls: ['./custom-ng-model.component.css']
})
export class CustomNgModelComponent implements OnInit {

  @Input() public text: boolean;
  @Output() public textChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
