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
  public photos$;
  public input: string;

  constructor(private service: JsonService) {}

  ngOnInit() {
    this.photos$ = this.service.getPhotos();
    this.service
      .getPhotos()
      .then(response => {
        return response.json();
      })
      .then((photos: Photo[]) => {
        this.photos = photos;
        this.selected = photos;
      });
  }

  inputChange() {
    this.selected = this.photos.filter(photo => {
      return photo.title.includes(this.input);
    });
  }
}
