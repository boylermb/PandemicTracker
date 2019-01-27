import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TrackerListComponent } from './tracker-list/tracker-list.component';
import { TrackerListItemComponent } from './tracker-list-item/tracker-list-item.component';

@NgModule({
  declarations: [TrackerListComponent, TrackerListItemComponent],
  imports: [CommonModule, TrackerRoutingModule, DragDropModule]
})
export class TrackerModule {}
