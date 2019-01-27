import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackerContainerComponent } from './tracker-container/tracker-container.component';

const routes: Routes = [{ path: 'tracker', component: TrackerContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackerRoutingModule { }
