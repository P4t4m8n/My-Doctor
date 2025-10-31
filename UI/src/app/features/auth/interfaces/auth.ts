import type { IID } from '../../../core/interfaces/entity';
import type { Role } from '../enums/role';

export interface IAuthDTO extends IID {
  first_name?: string;
  last_name?: string;
  role?: Role;
  avatarUrl?: string | null;
}
