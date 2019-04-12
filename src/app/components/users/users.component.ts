import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstname: 'aabed',
        lastname: 'kashwa',
        age: 22,
        address: {
          street: 'bragy',
          state: 'menofia',
          city: 'cairo'
        }
      },
      {
        firstname: 'alaa',
        lastname: 'lola',
        age: 18,
        address: {
          street: 'bragy',
          state: 'menofia',
          city: 'usa'
        }
      },
      {
        firstname: 'zahraa',
        lastname: 'kashwa',
        age: 20,
        address: {
          street: 'bragy',
          state: 'menofia',
          // city: 'paris'
        }
      }
    ];

    this.loaded = true;


    this.showExtended = false;

    this.addUser({
      firstname: 'David',
      lastname: 'goliath',
      // age: 40,
      address: {
        street: 'manhatten',
        // state: 'NY',
        // city: 'usa'
      }
    })
  }

  addUser(user: User) {
    this.users.push(user)
  }

}
