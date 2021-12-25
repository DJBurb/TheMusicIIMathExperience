import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisionPageRoutingModule } from './division-routing.module';

import { DivisionPage } from './division.page';
import { ProblemSolverModule } from '../../helperComponents/problem-solver/problem-solver.module';
import { InventoryAreaModule } from '../../helperComponents/inventory-area/inventory-area.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisionPageRoutingModule,
    InventoryAreaModule,
    ProblemSolverModule
  ],
  declarations: [DivisionPage]
})
export class DivisionPageModule {}
