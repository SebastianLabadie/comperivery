import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { ModalityComponent } from './components/modality/modality/modality.component';
import { TopFiltersComponent } from './components/top-filters/top-filters/top-filters.component';
import { SideFiltersComponent } from './components/side-filters/side-filters.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    ModalityComponent,
    TopFiltersComponent,
    SideFiltersComponent,
    ProductListComponent
  ],
  exports:[
    ModalityComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IvyCarouselModule
  ]
})
export class HomeModule {

}
