import { Post } from './../models/Post';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // Request GET.
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  // Request POST.
  savePost(postData: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, postData, httpOptions)
  }
}
