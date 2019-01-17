import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css']
})
export class PrimengComponent implements OnInit {
  
  public display = false;
  public text: string;
  
  constructor(private jsonService: JsonService) {}
  
  ngOnInit() {
    this.jsonService
      .getAlbumById(1)
      .subscribe((album: Album) => this.text = album.title);
  }

  showDialog() {
    this.display = !this.display;
  }

}
