
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'pairs', pure: false })
export class PairsPipe implements PipeTransform {
  transform(value:any) {
    return value.filter((v,i) => i%2==0).map((v,i) => [value[i*2], value[i*2+1]])
  }
}