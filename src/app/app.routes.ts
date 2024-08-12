import { Routes } from '@angular/router';
import { BaseComponent } from './pages/base/base.component';
import { BioComponent } from './components/bio/bio.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent
  },
  { path: 'post/:postId', component: BioComponent },
  { path: '**', redirectTo: '/post/default-post', pathMatch: 'full' }
];
