import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { JsonService } from '../../services/json.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[];
  public selected: User[];
  public input: string;

  constructor(private service: JsonService) {}

  ngOnInit() {
    this.service
      .getUsers()
      .then(response => { return response.json(); })
      .then((users: User[]) => {
        this.users = users;
        this.selected = users;
      })
      .catch(err => console.log(err));
  }

  filterByNameOrUsername() {
    this.selected = this.users.filter(user => {
      const regex = new RegExp(this.input, 'i');
      return user.name.match(regex) || user.username.match(regex);
    });
  }
}
