import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameLogContainerComponent } from './game-log-container/game-log-container.component';
import { GameLogControlsComponent } from './game-log-controls/game-log-controls.component';
import { MaterialModule } from '../materialimports.module';

@NgModule({
  declarations: [GameLogContainerComponent, GameLogControlsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [GameLogContainerComponent]
})
export class GameLogModule { }
