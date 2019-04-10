import { Component } from '@angular/core';

// this is part of TS and it is used to add extra info to our class/component.

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // properties
  firstname = 'aabed';
  lastname = 'kashwa';
  address = {
    street: "last street",
    city: "Tahoma city",
    apartment: 12
  }

  // methods
  constructor() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
  }
}
