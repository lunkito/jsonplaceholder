import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/models/photo';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  public photo$: Observable<Photo>;

  constructor(private service: JsonService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.photo$ = this.service.getPhotoBy(id);
  }

}
