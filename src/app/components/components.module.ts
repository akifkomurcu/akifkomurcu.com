import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ArticleListComponent } from './bio/article-list.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ HeaderComponent, ArticleListComponent, HomeComponent ],
  imports: [ CommonModule, RouterModule ],
  exports: [ HeaderComponent, ArticleListComponent, HomeComponent ],
  providers: [],
})
export class ComponentsModule {}
