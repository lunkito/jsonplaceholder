import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { JsonService } from 'src/app/services/json.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public selected: Photo[];
  public photos: Photo[];
  public photos$: Observable<Photo[]>;
  public input: string;

  constructor(private service: JsonService) {}

  ngOnInit() {
    this.photos$ = this.service.getPhotosObservable();
    this.service
      .getPhotos()
      .then(response => {
        return response.json();
      })
      .then((photos: Photo[]) => {
        const result = photos.map(photo => {
          photo.title = photo.title
            .split(' ', 2)
            .join(' ');
          return photo;
        });
        
        this.photos = result;
        this.selected = result;
      });
  }

  inputChange() {
    this.selected = this.photos.filter(photo => {   
      return photo.title.includes(this.input);
    });
  }
}
