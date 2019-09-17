import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modReq = req.clone({headers: req.headers.append('Auth', 'header on all requests set in one place')});
        return next.handle(modReq);
    }
}

/** INTERCEPTORS:
 * Say you wish to authenticate your users.
 * You need to add a certain param or header to every outgoing and incoming request for the backend to read.
 * This method is used rather than having to add a param or header to every single request individually 
 */
