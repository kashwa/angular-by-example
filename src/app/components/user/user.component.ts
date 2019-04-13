import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

// this is part of TS and it is used to add extra info to our class/component.

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  // properties
  user: User;

  // Methods
  constructor() {

  }

  ngOnInit() {
    this.user = {
      firstname: 'aabed',
      lastname: 'kashwa',
      email: 'aabed@app.com'
    }
  }
}
