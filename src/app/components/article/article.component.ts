import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import * as marked from 'marked';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  postContent: any = '';
  loading: boolean = true;
  error: string | null = null

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('postId');
    console.log('postIDddd', postId);

    if (postId) {
      this.loadMarkdown(postId);
    } else {
      console.error('Post ID is null');
      this.error = 'Post ID is missing.';
      this.loading = false;
    }
  }

  loadMarkdown(postId: string): void {
    const filePath = `assets/posts/${postId}.md`;
    this.http.get(filePath, { responseType: 'text' }).subscribe({
      next: (data) => {
        this.postContent = marked.parse(data);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading Markdown file', err);
        this.error = 'Failed to load the post.';
        this.loading = false;
      }
    });
  }
}
