import { Routes } from '@angular/router';
import { BaseComponent } from './pages/base/base.component';
import { BioComponent } from './components/bio/bio.component';
import { ArticleComponent } from './components/article/article.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent
  },
  { path: 'post/:postId', component: ArticleComponent },
  { path: '**', redirectTo: '/post/default-post', pathMatch: 'full' }
];
