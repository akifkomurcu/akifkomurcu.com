import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [BaseComponent],
  imports: [ CommonModule, ComponentsModule ],
  exports: [],
  providers: [],
})
export class PagesModule {}
