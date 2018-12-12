import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album-miniature',
  templateUrl: './album-miniature.component.html',
  styleUrls: ['./album-miniature.component.css']
})
export class AlbumMiniatureComponent implements OnInit {

  @Input()
  public album: Album;

  constructor() { }

  ngOnInit() {
  }

}
