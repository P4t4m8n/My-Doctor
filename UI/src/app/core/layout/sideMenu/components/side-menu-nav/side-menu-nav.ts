import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgComponentOutlet } from '@angular/common';

import { NAV_ROUTES } from '../../../../consts/nav-routes.const';

import type { INavRoute } from '../../../../models/nav-routes.model';
import { IconLogo } from '../../../../icons/icon-logo/icon-logo';
import { Role } from '../../../../../features/auth/enums/role';

@Component({
  selector: 'app-side-menu-nav',
  imports: [RouterLink, CommonModule, NgComponentOutlet],
  templateUrl: './side-menu-nav.html',
  styleUrl: './side-menu-nav.css',
})
export class AppNav {
  @Input({ required: true }) role!: Role;
  nav_routes: INavRoute[] | null = null;

  ngOnInit(): void {
    this.nav_routes = this.role ? NAV_ROUTES[this.role] || null : null;
  }
}
