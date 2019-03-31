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

  clicked(val: string) {
    console.log(val);
  }
}
