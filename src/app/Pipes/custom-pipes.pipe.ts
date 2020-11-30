import { Pipe, PipeTransform } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  transform(value:any,...arg) {
      console.log(value,arg);
      return "Saukat";
  }

}
