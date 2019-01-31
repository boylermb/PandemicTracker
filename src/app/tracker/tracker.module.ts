import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TrackerListComponent } from './tracker-list/tracker-list.component';
import { TrackerListItemComponent } from './tracker-list-item/tracker-list-item.component';
import { TrackerContainerComponent } from './tracker-container/tracker-container.component';
import { GameLogContainerComponent } from '../game-log/game-log-container/game-log-container.component';
import { GameLogControlsComponent } from '../game-log/game-log-controls/game-log-controls.component';

@NgModule({
  declarations: [
    TrackerContainerComponent,
    TrackerListComponent,
    TrackerListItemComponent,
    GameLogContainerComponent,
    GameLogControlsComponent
  ],
  imports: [CommonModule, TrackerRoutingModule, DragDropModule],
  exports: [
    TrackerContainerComponent
  ]
})
export class TrackerModule {}
