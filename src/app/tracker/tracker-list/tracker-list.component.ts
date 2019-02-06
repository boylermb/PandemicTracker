import { Component, OnInit, Input } from '@angular/core';
import { CityCard } from '../shared/city-card.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { AddCityDialogComponent } from '../add-city-dialog/add-city-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tracker-list',
  templateUrl: './tracker-list.component.html',
  styleUrls: ['./tracker-list.component.css']
})
export class TrackerListComponent implements OnInit {
  @Input() cityCardList: CityCard[] = [];

  @Input() title: string;

  constructor(public dialog: MatDialog) {}

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

  addItem() {
    const dialogRef = this.dialog.open(AddCityDialogComponent, {
      width: '250px', height: '350px', position: {
        top: '100px',
        left: '450px',
      },
      // data: CityMaker.create("","")
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.infectionDeck.push(result);
    // });
  }
}
