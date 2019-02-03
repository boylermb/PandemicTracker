import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameLogContainerComponent } from './game-log-container/game-log-container.component';
import { GameLogControlsComponent } from './game-log-controls/game-log-controls.component';
import { MaterialModule } from '../materialimports.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [GameLogContainerComponent, GameLogControlsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule
  ],
  exports: [GameLogContainerComponent]
})
export class GameLogModule { }
