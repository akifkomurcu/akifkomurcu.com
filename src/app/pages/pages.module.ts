import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { ComponentsModule } from '../components/components.module';
import { ArticleComponent } from '../components/article/article.component';

@NgModule({
  declarations: [BaseComponent, ArticleComponent],
  imports: [ CommonModule, ComponentsModule ],
  exports: [],
  providers: [],
})
export class PagesModule {}
