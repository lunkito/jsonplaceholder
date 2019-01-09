import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { JsonService } from 'src/app/services/json.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user$: Observable<User>;

  constructor(private service: JsonService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.user$ = this.service
      .getUserById(id);
  }
}
