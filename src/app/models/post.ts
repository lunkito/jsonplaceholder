import { Comment } from './comment';
import { User } from './user';

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
  users?: User[];
}