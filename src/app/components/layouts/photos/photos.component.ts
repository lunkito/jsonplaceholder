import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public selected: Photo[];
  public photos: Photo[];

  constructor(private service: JsonService) {}

  ngOnInit() {
    this.service
      .getPhotos()
      .then(response => response.json())
      .then((photos: Photo[]) => {
        this.photos = photos;
        this.selected = photos;
      });
  }

  applyFilter(value: string) {
    this.selected = this.photos.filter(photo => {
      const caseSensitive = new RegExp(value, 'i');
      return photo.title.match(caseSensitive);
    });
  }
}
