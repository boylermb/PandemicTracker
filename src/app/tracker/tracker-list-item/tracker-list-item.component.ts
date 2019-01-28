import { Component, OnInit, Input } from '@angular/core';
import { CityCard } from 'src/app/shared/city-card.model';
import { CardBackground } from '../../shared/card-background.enum';

@Component({
  selector: 'app-tracker-list-item',
  templateUrl: './tracker-list-item.component.html',
  styleUrls: ['./tracker-list-item.component.css']
})
export class TrackerListItemComponent implements OnInit {
  @Input()
  cityCard: CityCard;
  url: string;
  constructor() {}

  ngOnInit() {
      this.url = `../../../assets/{cityCard.color}`;
  }

}

