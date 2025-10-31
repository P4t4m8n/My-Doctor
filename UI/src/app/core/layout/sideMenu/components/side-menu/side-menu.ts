import { Component, inject, OnInit } from '@angular/core';
import { IconLogo } from '../../../../icons/icon-logo/icon-logo';
import { AppNav } from '../side-menu-nav/side-menu-nav';
import { AuthService } from '../../../../../features/auth/services/auth';
import { IAuthDTO } from '../../../../../features/auth/interfaces/auth';

@Component({
  selector: 'app-side-menu',
  imports: [IconLogo, AppNav],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
})
export class SideMenu implements OnInit {
  authService = inject(AuthService);

  session_user: IAuthDTO | null = null;

  ngOnInit(): void {
    this.authService._session_user$.subscribe((user) => {
      this.session_user = user;
    });
  }
}
