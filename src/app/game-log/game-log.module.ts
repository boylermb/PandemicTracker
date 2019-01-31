import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameLogContainerComponent } from './game-log-container/game-log-container.component';
import { GameLogControlsComponent } from './game-log-controls/game-log-controls.component';
import { MatButton } from '@angular/material';

@NgModule({
  declarations: [GameLogContainerComponent, GameLogControlsComponent, MatButton],
  imports: [
    CommonModule

  ],
  exports: [GameLogContainerComponent]
})
export class GameLogModule { }
