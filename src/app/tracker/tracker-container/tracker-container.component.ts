import { Component, OnInit } from '@angular/core';
import { CityCard } from 'src/app/tracker/shared/city-card.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { CardBackground } from 'src/app/tracker/shared/card-background.enum';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-tracker-container',
  templateUrl: './tracker-container.component.html',
  styleUrls: ['./tracker-container.component.css']
})
export class TrackerContainerComponent implements OnInit {
  cityCardList: CityCard[];
  cityCardList2: CityCard[];
  constructor(private trackerService: TrackerService) {}

  ngOnInit() {
    this.trackerService.list().subscribe(data => {
      this.cityCardList = data;
      this.cityCardList2 = data;
    });
  }

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
