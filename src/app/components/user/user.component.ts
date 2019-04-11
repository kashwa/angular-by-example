import { Component } from '@angular/core';
import { User } from '../../models/User';

// this is part of TS and it is used to add extra info to our class/component.

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  // properties
  user: User;

  // Methods
  constructor() {

    this.user = {
      firstname: 'aabed',
      lastname: 'kashwa',
      age: 22,
      address: {
        street: 'bragy',
        state: 'menofia',
        city: 'egy'
      }
    }

  }
}
