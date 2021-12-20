import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemDisplayComponent } from './problem-display.component';



@NgModule({
  declarations: [ProblemDisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [ProblemDisplayComponent]
})
export class ProblemDisplayModule { }
