import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Post } from './posts.model';
import { Subject, throwError } from 'rxjs';


@Injectable()
export class PostsService {

    public refreshToken$ = new Subject<void>(); // subject observable which emits value(s)
    public sendError$ = new Subject<any>();

    constructor(private http: HttpClient) {}

    createANDStorePost(postData: Post) {
        this.http
        .post<{ name: string}>(
          'https://httpcourse-9adb3.firebaseio.com/posts.json', postData,
          {
            observe: 'response'
          })
          .pipe(
            tap(() => {
             return this.refreshToken$.next();
            }),
          )
        .subscribe(responseData => {
          console.warn(responseData.body);
            // Subscription needed even though value not used for sending data to server
        }, error => {
          this.sendError$.next(error); // observer passes over error to component via subject
        });
    }

    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('frameWork', 'angular');
        searchParams = searchParams.append('unit-tests', 'jasmine');
        return this.http.get('https://httpcourse-9adb3.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({
            'custom-header' : 'getting data from firebase'
          }),
          params: searchParams
        })
        .pipe(
          map((retrivedData: {[key: string]: Post}) => {
            const postArray: Post[] = [];
            for (const key in retrivedData) {
              if (retrivedData.hasOwnProperty(key)) {// good pratice when using forin loop
              postArray.push({...retrivedData[key], id: key});
              }
            }
            return postArray; // to use in subscribption in here or component
          }
          , catchError( errorRes => {
            return throwError(errorRes);
          }),
        ));
    }

    clearPosts() {
        return this.http.delete('https://httpcourse-9adb3.firebaseio.com/posts.json',
        {
          observe: 'events',
          responseType: 'json'
        }
        ).pipe(
          tap( event => {
            console.warn('deletion = ', event);
            if (event.type === HttpEventType.Response) {
              console.log(event.body);
            }
        }));
    }
}


// .pipe allows you to transform the data your getting by allowing
// you to use other observable operators such as map, tap etc on the responseData...

// tap can observe data, cannot modify like map does

// map helps to tranform the retrived object data, in this case helps for use of turning object into an array

