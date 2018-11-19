import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';

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
}
