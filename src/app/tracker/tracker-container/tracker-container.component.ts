import { Component, OnInit } from '@angular/core';
import { CityCard } from 'src/app/shared/city-card.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
  cityCardList2: CityCard[] = [
    new CityCard(1, 'New York', 'Blue'),
    new CityCard(1, 'Chicago', 'Blue'),
    new CityCard(1, 'Hong Kong', 'Red')
  ];
  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<CityCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
