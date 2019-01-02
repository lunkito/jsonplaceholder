import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-heigth-equals-width',
  templateUrl: './heigth-equals-width.component.html',
  styleUrls: ['./heigth-equals-width.component.css']
})
export class HeigthEqualsWidthComponent implements OnInit {

  @ViewChild('ref')
  public child;
  
  public actualHeight;
  
  constructor() { }
  
  ngOnInit() {
    this.actualHeight = this.child.nativeElement.scrollWidth;
  }

  onResize() {
    this.actualHeight = this.child.nativeElement.scrollWidth;
  }

}
