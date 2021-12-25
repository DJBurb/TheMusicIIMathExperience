import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiplicationPageRoutingModule } from './multiplication-routing.module';

import { MultiplicationPage } from './multiplication.page';
import { ProblemSolverModule } from '../../helperComponents/problem-solver/problem-solver.module';
import { InventoryAreaModule } from '../../helperComponents/inventory-area/inventory-area.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiplicationPageRoutingModule,
    InventoryAreaModule,
    ProblemSolverModule
  ],
  declarations: [MultiplicationPage]
})
export class MultiplicationPageModule {}
