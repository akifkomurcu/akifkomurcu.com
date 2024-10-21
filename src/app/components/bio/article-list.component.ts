import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as marked from 'marked';
import { Store, Select } from '@ngxs/store';
import { LoadAllArticles } from '../shared/state/shared.actions';
import { SharedState } from '../shared/state/shared.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Select(SharedState.getState)
  sharedState$!: Observable<string[]>;
  articles: any[] = [];
  postContent: any;
  marking = marked;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadAllArticles());
    this.sharedState$.subscribe((item: any) => {
        this.articles = item.articles;
    });
  }


}
