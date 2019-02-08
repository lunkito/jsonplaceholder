import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Address } from 'src/app/models/address';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public mockUser: User;

  constructor() { }

  ngOnInit() {
    this.mockUser = new User()
      .setAddress(new Address())
      .setCompany(new Company())
      .setEmail('mock@email.com')
      .setId(1)
      .setName('Mockiel')
      .setPhone('213123123')
      .setUsername('Mockito')
      .setWebsite('mockito.com');
  }

}
