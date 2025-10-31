import { Injectable } from '@angular/core';
import { IAuthDTO } from '../interfaces/auth';
import { Role } from '../enums/role';
import { BehaviorSubject } from 'rxjs';

const demo_session_user: IAuthDTO = {
  id: 'id1111',
  first_name: 'doctor',
  last_name: 'user',
  role: Role.Doctor,
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
