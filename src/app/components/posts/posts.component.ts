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
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  }
  isEdit: boolean = false;

  constructor(private PostService: PostService) { }

  ngOnInit() {
    this.PostService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) { // post comming from event emitter == the current post ?
        this.posts.splice(index, 1)
        this.posts.unshift(post) // moves the post we update to the top
        this.isEdit = false
        this.currentPost = {  //* reset the values of the form to null.
          id: 0,
          title: '',
          body: '',
        }
      }
    });
  }

  removePost(post: Post) {
    if (confirm('Delete ??')) {
      this.PostService.removePost(post.id).subscribe(() => {
        this.posts.forEach((cur, index) => {
          if (post.id === cur.id) { // post comming from event emitter == the current post ?
            this.posts.splice(index, 1)
          }
        });
      })
    }
  }

}
