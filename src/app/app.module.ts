import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerFilterComponent } from './shared/component/player-filter/player-filter.component';
import { FilterplayerPipe } from './shared/pipe/filterplayer.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PlayerFilterComponent, FilterplayerPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
