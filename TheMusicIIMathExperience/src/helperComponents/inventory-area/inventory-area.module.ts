import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryAreaComponent } from '../inventory-area/inventory-area.component';



@NgModule({
  declarations: [InventoryAreaComponent],
  imports: [
    CommonModule
  ],
  exports: [InventoryAreaComponent]
})
export class InventoryAreaModule { }
