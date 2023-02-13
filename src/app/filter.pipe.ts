import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propname: string) {
    if (value.length === 0 || filterString.length === 0) {
      // alert('Match not found');
    }
    const resultarry = [];
    for (let item of value) {
      if (item[propname] === filterString) {
        resultarry.push(item);
      }
    }
    return resultarry;
  }
}
