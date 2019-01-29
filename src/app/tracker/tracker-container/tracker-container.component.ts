import { Component, OnInit } from '@angular/core';
import { CityCard } from 'src/app/tracker/shared/city-card.model';
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
}
