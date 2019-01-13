import { Album } from '../models/album';
import { Post } from '../models/post';
import { post } from 'selenium-webdriver/http';

export class Converter {
   static albumResponseToAlbum = (albumResponse: Album): Album => {
      const album = new Album();
      album.id = albumResponse.id;
      album.userId = albumResponse.userId;
      album.title = albumResponse.title;
      album.photos = albumResponse.photos;
      return album;
   }

   static postResponseToPost(postResponse: Post) {
      const post = new Post();
      post.body = postResponse.body;
      post.comments = postResponse.comments;
      post.id = postResponse.id;
      post.title = postResponse.title;
      post.users = postResponse.users;
      post.userId = postResponse.userId;
      return post;
   }
}