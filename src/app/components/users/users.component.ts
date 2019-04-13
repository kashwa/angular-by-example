import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]; // array of all users
  user: User = {
    firstname: '',
    lastname: '',
    email: '',
  }
  image = null;
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstname: 'aabed',
        lastname: 'kashwa',
        email: 'aabed@app.com',
        isActive: true,
        registered: new Date('01/02/2019 00:30:00'),
        hide: true,
      },
      {
        firstname: 'alaa',
        lastname: 'lola',
        email: 'alaa@app.com',
        registered: new Date('05/07/2018 00:30:00'),
        hide: true,
      },
      {
        firstname: 'zahraa',
        lastname: 'kashwa',
        email: 'zahraa@app.com',
        isActive: true,
        registered: new Date('02/05/2019 10:30:10'),
        hide: true,
      }
    ];

    this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstname: '',
  //     lastname: '',
  //     email: '',
  //   }
  // }

  onSubmit() {

  }
}
