import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FollowService {
  constructor(private http: HttpClient) {}

  onFollow(email: string) {
    const token = JSON.parse(String(localStorage.getItem('token')));
    const uid = JSON.parse(String(localStorage.getItem('id')));

    return this.http.post<{ status: string; message: string }>(
      'http://localhost:5000/api/v1/user/follow',
      { email, uid },
      {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      }
    );
  }
}
