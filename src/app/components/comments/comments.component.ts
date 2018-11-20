import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Observable, zip, forkJoin, combineLatest } from 'rxjs';
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
    // Ejemplos de operadores con 2 observables.
    // Al ser peticiones http, ¿vale cualquiera ya que solo cambian una vez de valor?

    // OBSERVABLES //
    this.posts$ = this.service.getPosts();
    this.comments$ = this.service.getComments();

    // En pares. Se emite valor cuando llegan al mismo ¿indice?
    // zip(this.posts$, this.comments$)
    //   .subscribe(([posts, comments]) => {
    //     console.log(`Zip`);
    //     console.log({posts});
    //     console.log({comments});
    //   });

    // Se emite valor cuando se termina todo
    // Si es a mano, llamar a .complete() (no en este caso)
    // forkJoin(this.posts$, this.comments$)
    //   .subscribe(([posts, comments]) => {
    //     console.log('Forkjoin');
    //     console.log({posts});
    //     console.log({comments});
    //   });

    // Se emite valor con cualquier cambio
    // combineLatest(this.posts$, this.comments$)
    //   .subscribe(([posts, comments]) => {
    //     console.log('Combine Latest');
    //     console.log({posts});
    //     console.log({comments});
    //   });

    // PROMISES //
    this.postsP = this.posts$.toPromise();
    this.commentsP = this.comments$.toPromise();

    Promise
      .all([this.postsP, this.commentsP])
      .then(([posts, comments]) => {

        this.posts = posts.map(post => {
          post = { ...post, comments: [] };

          comments.forEach(comment => {
            if (comment.postId === post.id) {
              post.comments.push(comment);
            }
          });

          return post;
        });

      });
  }
}
