import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Material.MatCardModule,
    Material.MatIconModule
  ],
  exports : [
    Material.MatCardModule,
    Material.MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
