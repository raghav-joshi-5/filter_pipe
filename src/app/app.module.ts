import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerFilterComponent } from './shared/component/player-filter/player-filter.component';
import { FilterplayerPipe } from './shared/pipe/filterplayer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerFilterComponent,
    FilterplayerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
