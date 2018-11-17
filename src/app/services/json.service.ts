import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

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

  // getUsers(): Observable<User[]> {
  //   return this.http
  //     .get<User[]>('https://jsonplaceholder.typicode.com/users');
  // }
}
