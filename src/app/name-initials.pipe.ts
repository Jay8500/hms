import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameInitials'
})
export class NameInitialsPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const words = value.trim().split(/\s+/);

    let initials = '';

    if (words.length === 1) {
      initials = words[0].charAt(0);
    } else if (words.length === 2) {
      initials = words[0].charAt(0) + words[1].charAt(0);
    } else if (words.length === 3 || words.length === 4) {
      initials = words[0].charAt(0) + words[1].charAt(0) + words[2].charAt(0);
    } else {
      // fallback: use first two initials if more than 4 words
      initials = words[0].charAt(0) + words[1].charAt(0);
    }

    return initials.toUpperCase();
  }
}
