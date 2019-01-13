import { Comment } from './comment';
import { User } from './user';

export class Post {
  public userId: number;
  public id: number;
  public title: string;
  public body: string;
  public comments?: Comment[];
  public users?: User[];

  public addUsers(users: User[]) {
    this.users = users;
  }

  public addComments(comments: Comment[]) {
    this.comments = comments;
  }
}