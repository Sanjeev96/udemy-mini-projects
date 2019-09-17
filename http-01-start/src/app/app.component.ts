import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './posts.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean;
  isDeleting: boolean;
  dataError = null;
  sendError = null;
  postSub: Subscription;

  constructor(
    private http: HttpClient,
    private postsService: PostsService
    ) {}

  ngOnInit() {
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
    }, error => {
      this.dataError = error.message;
    });

    this.postsService.refreshToken$.subscribe(() => {
      this.onFetchPosts();
    });
  }

  onCreatePost(postData: Post) {
    this.postsService.createANDStorePost(postData);
    this.postsService.sendError$.subscribe( error => {
      this.sendError = error.message;
    });
  }

  onFetchPosts() {
    this.isFetching = true;
    this.isDeleting = false;
    this.postsService.fetchPosts().subscribe(posts => {
    setTimeout(() => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, 1500);
    }, error => {
      this.isFetching = false;
      this.dataError = error.message;
      console.warn(this.dataError);
    });
  }

  onClearPosts() {
    this.isDeleting = true;
    this.postsService.clearPosts().subscribe(() => {
      setTimeout(() => {
        this.loadedPosts = [];
      }, 1500
      );
    });
  }

  sendPostError() {
    this.sendError = null;
  }

  getPostError() {
    this.dataError = null;
  }


}
