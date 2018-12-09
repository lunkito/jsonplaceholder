import { Component, OnInit, ViewChild, AfterViewChecked, ChangeDetectorRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-heigth-equals-width',
  templateUrl: './heigth-equals-width.component.html',
  styleUrls: ['./heigth-equals-width.component.css']
})
export class HeigthEqualsWidthComponent implements OnInit, AfterViewChecked {

  @HostBinding('style.width')
  public hostWidth;

  @ViewChild('ref')
  public child;
  
  public actualHeight = '100px';
  
  constructor(private change: ChangeDetectorRef) { }
  
  ngOnInit() {
    console.log('onInit()');
    console.log('hostBinding this.hostWidth');
    console.log(this.hostWidth);
    
    console.log('child');
    console.log(this.child.nativeElement);
    console.log(this.child.nativeElement.scrollWidth);
    this.actualHeight = this.child.nativeElement.scrollWidth;
    // this.change.detectChanges();
  }

  ngAfterViewChecked(): void {
    console.log('afterViewChecked()');
    // this.setRef();
  }

  setRef() {
    console.log('Antes');
    console.log(`viewChild style.height: ${this.child.nativeElement.style.heigth}`);
    console.log(`viewChild scrollWidth: ${this.child.nativeElement.scrollWidth}`);    

    this.child.nativeElement.style.heigth = this.child.nativeElement.scrollWidth;

    console.log('Despues');
    console.log(`viewChild style.height: ${this.child.nativeElement.style.heigth}`);
    console.log(`viewChild scrollWidth: ${this.child.nativeElement.scrollWidth}`);    

    // console.log(window.getComputedStyle(ref).width);
    // this.actualHeight = window.getComputedStyle(ref).width;
  }
}
