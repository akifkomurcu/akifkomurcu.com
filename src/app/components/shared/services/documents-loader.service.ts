import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentsLoaderService {
  constructor(
    private readonly http: HttpClient,
  ) {}

  loadAllDocumentsName(){
    return this.http.get(`assets/posts/posts-list.json`).pipe(
      map((val) => {
        return val;
      })
    );
  }
}
