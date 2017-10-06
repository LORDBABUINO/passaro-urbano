import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'shortDescription'
})
export class ShortDescription {
  transform(text: string): string {
    if(text.length > 15)
      return text.substr(0, 15) + '...'
    return text;
  }
}
