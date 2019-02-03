import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-log-controls',
  templateUrl: './game-log-controls.component.html',
  styleUrls: ['./game-log-controls.component.css']
})
export class GameLogControlsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  stepForward() {
    console.log('step forward clicked');
  }

  stepBack() {
    console.log('step back clicked');
  }

}
