import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-miniature',
  templateUrl: './post-miniature.component.html',
  styleUrls: ['./post-miniature.component.css']
})
export class PostMiniatureComponent implements OnInit {

  @Input()
  public post: Post;

  constructor() { }

  ngOnInit() {
  }

}
