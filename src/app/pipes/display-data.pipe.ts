import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayData'
})
export class DisplayDataPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
 
  let hour = new Date (value)
  let hour1 = hour.getHours()+":"+ hour.getMinutes();
  console.log(hour);
  return hour1;
  
  // const slicet = value.slice(11, 16);
  // const splited: string[] = slicet.split(':');
 


  // if (splited[0] < 13){
  //   return slicet + ' ' + 'AM';

  // } else if (splited[0] - 12 < 10) {

  //   return '0' + (splited[0] - 12) + ':' + splited[1] + ' ' + 'PM';
  // } else {

  //   return  (splited[0] - 12) + ':' + splited[1] + ' ' + 'PM';
  // }

  }

}
