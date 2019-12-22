import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TrackerListComponent } from './tracker-list/tracker-list.component';
import { TrackerListItemComponent } from './tracker-list-item/tracker-list-item.component';
import { TrackerContainerComponent } from './tracker-container/tracker-container.component';
import { GameLogModule } from '../game-log/game-log.module';
import { MaterialModule } from '../materialimports.module';
import { AddCityDialogComponent } from './add-city-dialog/add-city-dialog.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    TrackerContainerComponent,
    TrackerListComponent,
    TrackerListItemComponent,
    AddCityDialogComponent
      ],
  entryComponents:[AddCityDialogComponent],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    DragDropModule,
    GameLogModule,
    MaterialModule,
    MatInputModule
  ],
  exports: [TrackerContainerComponent,
  AddCityDialogComponent]
})
export class TrackerModule {}
