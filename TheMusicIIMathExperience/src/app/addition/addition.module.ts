import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditionPageRoutingModule } from './addition-routing.module';

import { AdditionPage } from './addition.page';
import { ProblemSolverModule } from '../../helperComponents/problem-solver/problem-solver.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditionPageRoutingModule,
    ProblemSolverModule
  ],
  declarations: [AdditionPage]
})
export class AdditionPageModule {}
