import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-miniature',
  templateUrl: './photo-miniature.component.html',
  styleUrls: ['./photo-miniature.component.css']
})
export class PhotoMiniatureComponent implements OnInit {

  @Input()
  public photo: Photo;

  constructor() { }

  ngOnInit() {
    this.photo.title = this.photo.title
      .split(' ', 2)
      .join(' ');
  }
}
