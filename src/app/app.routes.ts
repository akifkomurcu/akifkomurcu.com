import { Routes } from '@angular/router';
import { BaseComponent } from './pages/base/base.component';
import { ArticleListComponent } from './components/bio/article-list.component';
import { ArticleComponent } from './components/article/article.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent
  },
  { path: 'posts/:postId', component: ArticleComponent },
  { path: '**', redirectTo: '/post/default-post', pathMatch: 'full' }
];
