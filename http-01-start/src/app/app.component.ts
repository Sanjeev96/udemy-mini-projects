import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './posts.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean;
  isDeleting: boolean;
  postSub: Subscription;

  constructor(
    private http: HttpClient,
    private postsService: PostsService
    ) {}

  ngOnInit() {
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
    });

    this.postsService.refreshToken$.subscribe(() => {
      this.onFetchPosts();
    });
  }

  onCreatePost(postData: Post) {
    this.postsService.createANDStorePost(postData);
    this.postsService.fetchPosts().subscribe(posts => {
      setTimeout(() => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, 1500);
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



}
