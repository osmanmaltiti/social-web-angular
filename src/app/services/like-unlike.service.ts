import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LikeUnlikeService {
  token = JSON.parse(String(localStorage.getItem('token')));
  headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });

  constructor(private http: HttpClient) {}

  likePost(postId: string) {
    const uid = JSON.parse(String(localStorage.getItem('id')));
    return this.http.post<{ status: string; message: string }>(
      'http://localhost:5000/api/v1/post/like-post',
      { postId, uid },
      {
        headers: this.headers,
      }
    );
  }

  unlikePost(postId: string) {
    const uid = JSON.parse(String(localStorage.getItem('id')));
    return this.http.post<{ status: string; message: string }>(
      'http://localhost:5000/api/v1/post/unlike-post',
      { postId, uid },
      {
        headers: this.headers,
      }
    );
  }
}
