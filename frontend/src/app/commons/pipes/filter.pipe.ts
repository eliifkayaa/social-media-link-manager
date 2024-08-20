import { Pipe, PipeTransform } from '@angular/core';
import { SocialMediaModel } from '../model/socialMedia.model';

@Pipe({
  name: 'filterPipe',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: SocialMediaModel[], search: string): SocialMediaModel[] {
    if(search == "")
      return value;
    return value.filter(p=> p.name.toLowerCase().includes(search.toLowerCase()));
  }

}
