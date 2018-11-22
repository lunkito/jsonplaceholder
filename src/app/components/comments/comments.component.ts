import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Observable, zip, of } from 'rxjs';
import { map, mergeMap, tap, groupBy } from 'rxjs/operators';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public posts$: Observable<Post[]>;

  constructor(private service: JsonService) {}

  ngOnInit() {
    this.posts$ = this
      .awaitPostsAndComments()
      .pipe(map(this.addCommentsToPosts()));
  }

  private awaitPostsAndComments() {
    return zip(this.service.getPosts(), this.service.getComments());
  }

  private addCommentsToPosts(): (value: [Post[], Comment[]]) => Post[] {
    return ([posts, comments]) => {
      posts = posts.map(post => {
        return { ...post, comments: comments.filter(comment => post.id === comment.postId) };
      });
      return posts;
    };
  }
}
