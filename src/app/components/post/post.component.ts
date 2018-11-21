import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { concat } from 'rxjs/operators';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { async } from 'rxjs/internal/scheduler/async';

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
    const id = this.route.snapshot.params['id'];
    this.post$ = this.service.getPostBy(id);
    // this.comments$ = this.service.getCommentsByPost(this.post$ | async);
    
    
    const both = this.post$
      .pipe(concat(this.comments$))
      .subscribe((postAndComments) => {
        const post = postAndComments[0];
        const comments = postAndComments[1];

        console.log({post});
        console.log({comments});
      });

    this.post$.subscribe(post => {
      this.comments$ = this.service.getCommentsByPost(post.id);
    });
  }

}
