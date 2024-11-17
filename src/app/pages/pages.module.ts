import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { ComponentsModule } from '../components/components.module';
import { ArticleComponent } from '../components/article/article.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BaseComponent, ArticleComponent, AdminComponent],
  imports: [ CommonModule, ComponentsModule, FormsModule],
  exports: [],
  providers: [],
})
export class PagesModule {}
