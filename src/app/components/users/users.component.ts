import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { JsonService } from '../../services/json.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[];
  public input: string;
  public selected: User[];

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

  filter() {
    this.selected = this.users.filter(user => {
      return user.name.includes(this.input);
    });
  }
}
