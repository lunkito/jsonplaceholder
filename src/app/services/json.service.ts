import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';
import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { Todo } from '../models/todo';
import { Album } from '../models/albums';

@Injectable({
  providedIn: 'root'
})
  export class JsonService {

  private URL = 'https://jsonplaceholder.typicode.com';
  
  constructor(private http: HttpClient) {}

  getAlbums() {
    return this.http
      .get<Album[]>(`${this.URL}/albums`);
  }

  getUsers() {
    return fetch(`${this.URL}/users`);
  }

  getUserBy(id: number) {
    return fetch(`${this.URL}/users/${id}`);
  }

  getPhotos() {
    return fetch(`${this.URL}/photos`);
  }

  getPhotosObservable() {
    return this.http
      .get<Photo[]>(`${this.URL}/photos`);
  }

  getPhotoBy(id: number) {
    return this.http.get<Photo>(`${this.URL}/photos/${id}`);
  }

  getPosts() {
    return this.http.get<Post[]>(`${this.URL}/posts`);
  }

  getPostBy(id: number) {
    return this.http.get<Post>(`${this.URL}/posts/${id}`);
  }

  getComments() {
    return this.http.get<Comment[]>(`${this.URL}/comments`);
  }

  getCommentsByPost(id: number) {
    return this.http.get<Comment[]>(`${this.URL}/posts/${id}/comments`);
  }

  getTodos() {
    return this.http.get<Todo[]>(`${this.URL}/todos`);
  }
}
