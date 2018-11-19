import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { JsonService } from 'src/app/services/json.service';
import { Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User;

  constructor(private service: JsonService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.service
      .getUserBy(id as number)
      .then(response => { return response.json(); })
      .then(user => { this.user = user; })
      .catch(err => { console.log(err); });
  }

}
