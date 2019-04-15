import { Post } from './../../models/Post';
import { PostService } from './../../services/post.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title: any, body: any) {
    if (!title || !body) {
      alert('please make sure of your data');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        // emit an event and use that to push (unshift)
        this.newPost.emit(post);
      });
    }
  }

  updatePost() {
    console.log(123)
  }

}
