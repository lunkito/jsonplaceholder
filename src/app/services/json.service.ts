import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';
import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
  export class JsonService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users');
  }

  getUserBy(id: number) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getPhotos() {
    return fetch('https://jsonplaceholder.typicode.com/photos');
  }

  getPhotosObservable() {
    return this.http
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }

  getPhotoBy(id: number) {
    return this.http.get<Photo>(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostBy(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getComments() {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments`);
  }

  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
