import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-heigth-equals-width',
  templateUrl: './heigth-equals-width.component.html',
  styleUrls: ['./heigth-equals-width.component.css']
})
export class HeigthEqualsWidthComponent implements OnInit {

  @ViewChild('ref')
  public child;
  
  public actualHeight = '100px';
  
  constructor() { }
  
  ngOnInit() {  
    console.log('child');
    console.log(this.child.nativeElement);
    console.log(this.child.nativeElement.scrollWidth);
    this.actualHeight = this.child.nativeElement.scrollWidth;
    // this.change.detectChanges();
  }

}
