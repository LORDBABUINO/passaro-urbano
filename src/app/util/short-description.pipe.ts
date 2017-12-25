import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'shortDescription'
})
export class ShortDescription {
  transform(text: string, cutAt: number): string {
    if(text.length > cutAt)
      return text.substr(0, cutAt) + '...'
    return text;
  }
}
