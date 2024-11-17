import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>('http://localhost:3000/admin/login', { username, password });
  }
}
