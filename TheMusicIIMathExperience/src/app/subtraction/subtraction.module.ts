import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtractionPageRoutingModule } from './subtraction-routing.module';

import { SubtractionPage } from './subtraction.page';
import { ProblemSolverModule } from '../../helperComponents/problem-solver/problem-solver.module';
import { InventoryAreaModule } from '../../helperComponents/inventory-area/inventory-area.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryAreaModule,
    SubtractionPageRoutingModule,
    ProblemSolverModule
  ],
  declarations: [SubtractionPage]
})
export class SubtractionPageModule {}
