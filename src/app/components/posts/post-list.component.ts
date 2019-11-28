import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service';

@Component({
    templateUrl: 'posts.pug',
    styleUrls: ['./posts.css']
})
export class PostListComponent implements OnInit {
    posts: any;
    constructor(private postService: PostsService) {}

    ngOnInit(): void {
        this.getPosts();
    }

    getPosts() {
        return this.postService
            .getPosts()
            .subscribe(posts => (this.posts = posts));
    }
}
