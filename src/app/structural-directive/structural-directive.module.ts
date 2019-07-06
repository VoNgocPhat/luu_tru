import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgifComponent } from './ng-if/ngif.component';
import { BaitapNgifComponent } from './baitap-ngif/baitap-ngif.component';
import { NgforComponent } from './ng-for/ngfor.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

@NgModule({
  declarations: [StructuralDirectiveComponent, NgifComponent, BaitapNgifComponent, NgforComponent, NgSwitchComponent],
  exports: [StructuralDirectiveComponent],
  imports: [
    CommonModule,FormsModule
  ]
})
export class StructuralDirectiveModule { }
