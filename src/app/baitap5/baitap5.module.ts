import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap5Component} from './baitap5.component';
import { Baitap5HeaderComponent } from './baitap5-header/baitap5-header.component';
import { Baitap5CarouselComponent } from './baitap5-carousel/baitap5-carousel.component';
import { Baitap5SmartPhoneComponent } from './baitap5-list-smart-phone/baitap5-smart-phone.component';
import { Baitap5LaptopComponent } from './baitap5-list-laptop/baitap5-laptop.component';
import { Baitap5PromotionComponent } from './baitap5-promotion/baitap5-promotion.component';
import { Baitap5ItemSanPhamComponent } from './baitap5-item-san-pham/baitap5-item-san-pham.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [Baitap5Component, Baitap5ItemSanPhamComponent, Baitap5HeaderComponent, Baitap5CarouselComponent, Baitap5SmartPhoneComponent, Baitap5LaptopComponent, Baitap5PromotionComponent],
  exports: [Baitap5Component],
  imports: [
    CommonModule
  ]
})
export class Baitap5Module { }
