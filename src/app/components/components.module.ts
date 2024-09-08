import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './bio/bio.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ HeaderComponent, BioComponent, HomeComponent ],
  imports: [ CommonModule, RouterModule ],
  exports: [ HeaderComponent, BioComponent, HomeComponent ],
  providers: [],
})
export class ComponentsModule {}
