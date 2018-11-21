import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Observable, zip } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments$: Observable<Comment[]>;
  public posts$: Observable<Post[]>;

  public commentsP: Promise<Comment[]>;
  public postsP: Promise<Post[]>;

  public posts: Post[];
  public comments: Comment[];

  constructor(private service: JsonService) {}

  ngOnInit() {

    this.posts$ = this.service.getPosts();
    this.comments$ = this.service.getComments();

    // En pares. Se emite valor cuando llegan al mismo ¿indice?
    zip(this.posts$, this.comments$)
      .subscribe(([posts, comments]) => {
        this.posts = posts.map(post => {
          return post = { ...post, comments: comments.filter(comment => comment.postId === post.id) };
        });
      });

    // Se emite valor cuando se termina todo
    // Si es a mano, llamar a .complete() (no en este caso)
    // forkJoin(this.posts$, this.comments$)
    // Se emite valor con cualquier cambio
    // combineLatest(this.posts$, this.comments$)
  }
}
