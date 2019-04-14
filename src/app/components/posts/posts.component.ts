import { PostService } from './../../services/post.service';
import { Post } from './../../models/Post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private PostService: PostService) { }

  ngOnInit() {
    this.PostService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

}
