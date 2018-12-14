import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public posts$: Observable<Post[]>;

  constructor(public service: JsonService) {}

  ngOnInit() {
    this.service.getUserBy(1)
      .then(response => JSON.stringify(response))
      .then(userString => console.log(userString));
    
    this.posts$ = this
      .zipPostsAndComments()
      .pipe(
        map(([posts, comments]) => this.addCommentsToPost(posts, comments))
      );
  }

  private addCommentsToPost(posts: Post[], comments: Comment[]) {
    return posts.map(post => {
      return { ...post, comments: comments.filter(comment => post.id === comment.postId) };
    });
  }

  private zipPostsAndComments() {
    return zip(this.service.getPosts(), this.service.getComments());
  }
}
