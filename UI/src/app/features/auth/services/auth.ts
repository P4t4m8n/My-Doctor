import { Injectable } from '@angular/core';
import { IAuthDTO } from '../interfaces/auth';
import { Role } from '../enums/role';
import { BehaviorSubject } from 'rxjs';

const demo_session_user: IAuthDTO = {
  id: 'id1111',
  first_name: 'name',
  last_name: 'user',
  role: Role.Doctor,
  avatarUrl:
    'https://res.cloudinary.com/dyzqa6uuu/image/upload/v1739212151/zlohynadf2vt9nezigte.jpg',
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private session_user$ = new BehaviorSubject<IAuthDTO | null>(demo_session_user);

  public _session_user$ = this.session_user$.asObservable();

  get_session_user(): IAuthDTO | null {
    return this.session_user$.getValue();
  }
}
