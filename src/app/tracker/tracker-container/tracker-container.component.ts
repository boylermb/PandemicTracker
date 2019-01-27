import { Component, OnInit } from '@angular/core';
import { CityCard } from 'src/app/shared/city-card.model';


@Component({
  selector: 'app-tracker-container',
  templateUrl: './tracker-container.component.html',
  styleUrls: ['./tracker-container.component.css']
})
export class TrackerContainerComponent implements OnInit {
  cityCardList: CityCard[] = [
    new CityCard(1, 'New York', 'Blue'),
    new CityCard(1, 'Chicago', 'Blue'),
    new CityCard(1, 'Hong Kong', 'Red')
  ];
  constructor() { }

  ngOnInit() {
  }

}
