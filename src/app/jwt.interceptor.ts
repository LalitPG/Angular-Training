import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from './membership/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const auth = inject(AuthService);
  const token = auth.getToken();

  const isLogin = req.url.includes('auth/login');
  const isRegister = req.url.includes('auth/register');

  // Add existing token to NON-auth requests
  if (!isLogin && !isRegister && token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        console.log("Interceptor Response Body:", event.body);

        // Try multiple common token formats
        const body: any = event.body;

        const extractedToken =
          body?.token ||
          body?.jwt ||
          body?.access_token ||
          body?.data?.token;

        if (extractedToken) {
          console.log("Token stored:", extractedToken);
          auth.setToken(extractedToken);
        }
      }
    })
  );
};
