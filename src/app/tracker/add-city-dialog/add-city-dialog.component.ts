import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CityCard } from '../shared/city-card.model';
import { CardBackground } from '../shared/card-background.enum';

@Component({
  selector: 'app-add-city-dialog',
  templateUrl: './add-city-dialog.component.html',
  styleUrls: ['./add-city-dialog.component.css']
})
export class AddCityDialogComponent {
  cardBackgrounds = CardBackground;
  constructor(
    public dialogRef: MatDialogRef<AddCityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CityCard) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
