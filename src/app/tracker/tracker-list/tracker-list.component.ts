import { Component, OnInit, Input } from '@angular/core';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { CityCard } from '../../shared/city-card.model';

@Component({
  selector: 'app-tracker-list',
  templateUrl: './tracker-list.component.html',
  styleUrls: ['./tracker-list.component.css']
})
export class TrackerListComponent implements OnInit {
  @Input()
  cityCardList: CityCard[] = [];
  constructor() {}

  ngOnInit() {}
}
