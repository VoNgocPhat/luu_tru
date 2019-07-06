import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from './baitap4.component';
import { Baitap4HeaderComponent } from './baitap4-header/baitap4-header.component';
import { Baitap4WhatWeDoComponent } from './baitap4-what-we-do/baitap4-what-we-do.component';
import { Baitap4ContactUsComponent } from './baitap4-contact-us/baitap4-contact-us.component';
import { Baitap4CarouselComponent } from './baitap4-carousel/baitap4-carousel.component';
import { Baitap4FooterComponent } from './baitap4-footer/baitap4-footer.component';
import { Baitap4ItemComponent } from './baitap4-item/baitap4-item.component';
import { Baitap4ListItemComponent } from './baitap4-list-item/baitap4-list-item.component';

@NgModule({
  declarations: [Baitap4Component,Baitap4HeaderComponent, Baitap4WhatWeDoComponent, Baitap4ContactUsComponent, Baitap4CarouselComponent, Baitap4FooterComponent, Baitap4ItemComponent, Baitap4ListItemComponent],
  exports: [Baitap4Component],
  imports: [
    CommonModule
  ]
})
export class Baitap4Module {}
