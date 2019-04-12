import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  image = null;
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { this.image = 'http://lorempixel.com/600/600/people/3'; }

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
        },
        image: this.image
      },
      {
        firstname: 'alaa',
        lastname: 'lola',
        age: 18,
        address: {
          street: 'bragy',
          state: 'menofia',
          city: 'usa'
        },
        image: this.image
      },
      {
        firstname: 'zahraa',
        lastname: 'kashwa',
        age: 20,
        address: {
          street: 'bragy',
          state: 'menofia',
          city: 'paris'
        },
        image: this.image
      }
    ];

    this.loaded = true;


    this.showExtended = true;

    // this.addUser({
    //   firstname: 'David',
    //   lastname: 'goliath',
    //   age: 40,
    //   address: {
    //     street: 'manhatten',
    //     state: 'NY',
    //     city: 'usa'
    //   },
    //   image: this.image
    // })
  }

  addUser(user: User) {
    this.users.push(user)
  }

}
