import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { zip, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public posts$: Observable<Post[]>;

  constructor(public service: JsonService) {}

  ngOnInit() {
    this.posts$ = this.getPosts$();  
  }

  private getPosts$(): Observable<Post[]> {
    return this
      .zipPostCommentsUsers()
      .pipe(map(([posts, comments, users]) => {
        return this.addCommentsAndUsersToPosts(posts, comments, users);
      }));
  }

  private zipPostCommentsUsers() {
    return zip(this.service.getPosts(), this.service.getComments(), this.service.getUsers$());
  }

  private addCommentsAndUsersToPosts(posts: Post[], comments: Comment[], users: User[]): Post[] {
    return posts.map(postResponse => {
      postResponse.comments = comments.filter(comment => comment.postId === postResponse.id);
      postResponse.users = users.filter(user => user.id === postResponse.userId);
      return postResponse;
    });
  }
}
