import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDiretiveComponent } from './attribute-diretive.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { BaitapQuanLySPComponent } from './baitap-quan-ly-sp/baitap-quan-ly-sp.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [AttributeDiretiveComponent, NgClassComponent, NgStyleComponent, BaitapQuanLySPComponent, HighlightDirective],
  exports: [AttributeDiretiveComponent],
  imports: [
    CommonModule
  ]
})
export class AttributeDiretiveModule { }
