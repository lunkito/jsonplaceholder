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
  public allUsers: User[];
  public filteredUsers: User[];
  public nameOrUsername: string;

  constructor(private service: JsonService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  private fetchUsers() {
    this.service
      .getUsers()
      .then(response => { return response.json(); })
      .then((users: User[]) => {
        this.allUsers = users;
        this.filteredUsers = users;
      })
      .catch(err => console.log(err));
  }

  filterByNameOrUsername() {
    this.filteredUsers = this.allUsers.filter(user => {
      const regex = new RegExp(this.nameOrUsername, 'i');
      return user.name.match(regex) || user.username.match(regex);
    });
  }
}
