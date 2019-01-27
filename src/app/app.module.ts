import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialimports.module';
import { TrackerModule } from './tracker/tracker.module';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { HomeModule } from './home/home.module';
import { TrackerContainerComponent } from './tracker/tracker-container/tracker-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    TrackerContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    TrackerModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
