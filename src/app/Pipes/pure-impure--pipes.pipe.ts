import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureImpurePipes',
  pure: false
})
export class PureImpurePipesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    console.log(value);
    return value.join();
  }

}
