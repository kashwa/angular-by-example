import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('userForm') form: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
    this.loaded = true;
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {

    if (!valid) {
      console.log('Form is not valid')
    } else {
      value.isActive = true
      value.registered = new Date()
      value.hide = true

      this.dataService.addUser(value)
      this.form.reset()
    }
  }
}
