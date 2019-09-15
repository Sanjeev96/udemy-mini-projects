import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Post } from './posts.model';
import { Subject } from 'rxjs';


@Injectable()
export class PostsService {

    public refreshToken$ = new Subject<void>(); // subject observable which emits value(s)

    constructor(private http: HttpClient) {}

    createANDStorePost(postData: Post) {
        this.http
        .post<{ name: string}>(
          'https://httpcourse-9adb3.firebaseio.com/posts.json', postData)
          .pipe(
            tap(() => {
             return this.refreshToken$.next();
            }),
          )
        .subscribe(responseData => {
            // Subscription needed even though value not used for sending data to server
        });
    }

    fetchPosts() {
        return this.http.get('https://httpcourse-9adb3.firebaseio.com/posts.json')
        .pipe(
          map((retrivedData: {[key: string]: Post}) => {
            // map helps to tranform the data, in this case helps for use of turning object into an array
            const postArray: Post[] = [];
            for (const key in retrivedData) {
              if (retrivedData.hasOwnProperty(key)) {// good pratice when using forin loop
              postArray.push({...retrivedData[key], id: key});
              }
            }
            return postArray; // to use in subscribption in here or component
          }
        ));
    }

    clearPosts() {
        return this.http.delete('https://httpcourse-9adb3.firebaseio.com/posts.json');
    }
}


// .pipe allows you to transform the data your getting by allowing
// you to use other observable operators such as map, tap etc on the responseData...

// tap can observe data, cannot modify like map does