import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../../auth/enums/role';

const UNKNOWN_ROLE = 'Unknown Role';

@Pipe({
  name: 'toRole',
})
export class ToRolePipe implements PipeTransform {
  transform(value?: number): string {
    return value ? Role[value] || UNKNOWN_ROLE : UNKNOWN_ROLE;
  }
}
