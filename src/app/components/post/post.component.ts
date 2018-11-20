import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post$: Observable<Post>;

  constructor(private service: JsonService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.post$ = this.service.getPostBy(id);
  }

}
