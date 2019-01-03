import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  public posts$: Observable<Post[]>;

  constructor(private service: JsonService) {}

  ngOnInit() {
    this.posts$ = this.service.getPosts();
  }
}
