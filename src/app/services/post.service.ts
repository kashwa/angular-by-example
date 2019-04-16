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

  // Request PUT.
  updatePost(postData: Post): Observable<Post> {
    const url = `${this.postsUrl}/${postData.id}`;

    return this.http.put<Post>(url, postData, httpOptions)
  }

  // Request DELETE.
  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`

    return this.http.get<Post>(url);
  }
}
