import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './bio/bio.component';

@NgModule({
  declarations: [ HeaderComponent, BioComponent ],
  imports: [ CommonModule ],
  exports: [ HeaderComponent, BioComponent ],
  providers: [],
})
export class ComponentsModule {}
