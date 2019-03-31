import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  var_id = 'asdasd'
  public dis = false

  public msgClass = {
    "text-success":false,
    "text-dangrt": false,
    "text-special": false
  }

  onClick() {
    this.var_id = "Not aabed"
  }

}
