import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Observable, zip } from 'rxjs';
import { Album } from 'src/app/models/album';
import { Photo } from 'src/app/models/photo';
import { map, tap } from 'rxjs/operators';
import { Converter } from 'src/app/converter/album.converter';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public albums$: Observable<Album[]>;
  public photos$: Observable<Photo[]>;

  constructor(private json: JsonService) {}

  ngOnInit() {
    this.albums$ = this
      .zipAlbumsAndPhotos()
      .pipe(
        map(([albums, photos]) => this.addPhotosToAlbums(albums, photos)),
        tap(albums => console.log(albums))
      );
  }

  private addPhotosToAlbums(albums: Album[], photos: Photo[]): Album[] {
    return albums.map(albumResponse => {
      const album = Converter.albumResponseToAlbum(albumResponse);
      album.addPhotos(photos.filter(photo => photo.albumId === album.id));
      return album;
    });
  }

  private zipAlbumsAndPhotos() {
    return zip(this.json.getAlbums(), this.json.getPhotosObservable());
  }
}
