import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../module/player';

@Pipe({
  name: 'filterplayer',
})
export class FilterplayerPipe implements PipeTransform {
  // transform(
  //   value: Array<Iplayer>,
  //   searchKey: string,
  //   searchVal: string
  // ): Array<Iplayer> {
  //   if (!searchVal) {
  //     return value;
  //   }
  //   if (!value) {
  //     return [];
  //   }
  //   let filterVal = value.filter((player) => {
  //     return player[searchKey]?.team
  //       .toLowerCase()
  //       .includes(searchVal.toLowerCase());
  //   });
  //   return filterVal;
  // }
  transform(value: any[], searchedKey: string, searchVal: string): any[] {
    if (!value || !searchedKey || !searchVal) {
      return value;
    }

    return value.filter((player) =>
      player[searchedKey]
        .toString()
        .toLowerCase()
        .includes(searchVal.toLowerCase())
    );
  }
}
