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
  currentClasses = {};
  currentStyles = {};

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
        image: this.image,
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2019 00:30:00')
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
        image: this.image,
        balance: 200,
        registered: new Date('15/07/2018 00:30:00')
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
        image: this.image,
        isActive: true,
        balance: 300,
        registered: new Date('01/02/2019 10:30:10')
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

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user)
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd, // class success will be added if (this.enabled = true)
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

}
