import { Component, HostBinding, inject, OnInit, signal } from '@angular/core';
import { AuthService } from '../../../../../features/auth/services/auth';
import { IAuthDTO } from '../../../../../features/auth/interfaces/auth';
import { TitleCasePipe } from '@angular/common';
import { ToRolePipe } from '../../../../../features/user/pipes/to-role-pipe';
import { IconLogo } from '../../../../icons/icon-logo/icon-logo';
import { INavRoute } from '../../../../models/nav-routes.model';
import { NAV_ROUTES } from '../../../../consts/nav-routes.const';
import { RouterLink } from '@angular/router';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { IconCloseOpen } from "../../../../icons/icon-close-open/icon-close-open";
@Component({
  selector: 'app-side-menu',
  imports: [ToRolePipe, TitleCasePipe, IconLogo, RouterLink, CommonModule, NgComponentOutlet, IconCloseOpen],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
  hostDirectives: [],
})
export class SideMenu implements OnInit {
  authService = inject(AuthService);

  isOpen = signal(true);

  session_user: IAuthDTO | null = null;
  nav_routes: INavRoute[] | null = null;

  ngOnInit(): void {
    this.authService._session_user$.subscribe((user) => {
      this.session_user = user;
    });
    this.nav_routes = this.session_user?.role ? NAV_ROUTES[this.session_user.role] || null : null;
  }

  @HostBinding('class.hide')
  get hide() {
    return !this.isOpen();
  }

  onToggle() {
    this.isOpen.set(!this.isOpen());
  }
}
