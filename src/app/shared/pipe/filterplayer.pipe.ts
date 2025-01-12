import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../module/player';

@Pipe({
  name: 'filterplayer',
})
export class FilterplayerPipe implements PipeTransform {
  transform(value: Array<Iplayer>, searchVal: string): Array<Iplayer> {
    if (!searchVal) {
      return value;
    }
    if (!value) {
      return [];
    }
    let filterVal = value.filter((player) => {
      return player.team.toLowerCase().includes(searchVal.toLowerCase());
    });
    return filterVal;
  }
}
