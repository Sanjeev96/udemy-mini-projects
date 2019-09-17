import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('req on way'); // show for each req that leave the app i.e post, patch, get , delete etc...
        return next.handle(req);
    }
}

/** INTERCEPTORS:
 * Say you wish to authenticate your users.
 * You need to add a certain param or header to every outgoing and incoming request for the backend to read.
 * This method is used rather than having to add a param or header to every single request individually 
 */
