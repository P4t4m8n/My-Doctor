import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';

import { map } from 'rxjs';

import { AuthService } from '../../auth/services/auth';

import { Role } from '../../auth/enums/role';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const allowedRoles: string[] = route.data['roles'] || [];
  return authService._session_user$.pipe(
    map((session) => {
      if (session?.role && allowedRoles.includes(Role[session.role])) {
        return true;
      }
      return router.createUrlTree(['/auth']);
    })
  );
};
