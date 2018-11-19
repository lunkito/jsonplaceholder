import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  export class JsonService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users');
  }

  getPhotos() {
    return fetch('https://jsonplaceholder.typicode.com/photos');
  }

  getUserBy(id: number) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  // getUsers(): Observable<User[]> {
  //   return this.http
  //     .get<User[]>('https://jsonplaceholder.typicode.com/users');
  // }
}
