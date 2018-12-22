import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { Observable, zip } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public users$: Observable<User[]>;
  public comments$: Observable<Comment[]>;
  public posts$: Observable<Post[]>;

  public users: User[];
  public posts: Post[];
  public comments: Comment[];

  constructor(public service: JsonService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(posts => this.posts = posts);
    this.service.getUsers$().subscribe(users => this.users = users);
    this.service.getComments().subscribe(comments => this.comments = comments);
  }
}
