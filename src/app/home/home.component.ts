import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pics = [
    { user: 1},
    { user: 2},
    { user: 3},
    { user: 4},
    { user: 5},
    { user: 6},

  ];

  constructor() { }

  ngOnInit() {
  }

}
