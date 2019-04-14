import { User } from 'src/app/models/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() {
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
  }

  getUsers(): User[] {
    console.log('fetching users from srtvice...');

    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
