import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Observable, zip } from 'rxjs';
import { Album } from 'src/app/models/album';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public album$: Observable<Album>;
  public photos: Photo[];

  constructor(private jsonService: JsonService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.album$ = this.jsonService.getAlbumById(id);

    this.zipAlbumAndPhotos()
      .subscribe(([album, photos]) => this.photos = this.filterAlbumPhotos(album, photos));
  }

  private filterAlbumPhotos(album: Album, photos: Photo[]) {
    return photos.filter(photo => photo.albumId === album.id);
  }

  private zipAlbumAndPhotos() {
    return zip(this.album$, this.jsonService.getPhotosObservable());
  }  
}
