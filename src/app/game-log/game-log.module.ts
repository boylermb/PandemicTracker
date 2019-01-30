import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameLogContainerComponent } from './game-log-container/game-log-container.component';
import { GameLogControlsComponent } from './game-log-controls/game-log-controls.component';

@NgModule({
  declarations: [GameLogContainerComponent, GameLogControlsComponent],
  imports: [
    CommonModule
  ]
})
export class GameLogModule { }
