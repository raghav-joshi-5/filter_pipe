import { Component, OnInit } from '@angular/core';
import { Iplayer } from '../../module/player';
import { playerArr } from '../../const/player';

@Component({
  selector: 'app-player-filter',
  templateUrl: './player-filter.component.html',
  styleUrls: ['./player-filter.component.scss'],
})
export class PlayerFilterComponent implements OnInit {
  onPlayerFilter(event: Event) {
    this.searchVal = (event.target as HTMLInputElement).value;
  }
  constructor() {}

  ngOnInit(): void {}
  searchVal!: string;
  playerArray: Array<Iplayer> = playerArr;
}
