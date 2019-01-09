import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public album$: Observable<Album>;

  constructor(private jsonService: JsonService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.album$ = this.jsonService.getAlbumById(id);
  }
}
