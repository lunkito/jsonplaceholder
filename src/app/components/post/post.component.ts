import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post$: Observable<Post>;
  public comments$: Observable<Comment[]>;

  constructor(private service: JsonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPost();
    this.getPostComments();
  }

  private getPost() {
    const id = this.route.snapshot.params['id'];
    this.post$ = this.service.getPostBy(id);
  }
  
  private getPostComments() {
    this.comments$ = this.post$.pipe(
      mergeMap(post => { return this.service.getCommentsByPost(post.id); })
    );
  }
}
