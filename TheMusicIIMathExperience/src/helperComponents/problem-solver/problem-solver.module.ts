import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemSolverComponent } from './problem-solver.component';
import { ProblemDisplayModule } from '../problem-display/problem-display.module';
import { EmotionCardModule } from '../emotion-card/emotion-card.module';
import { AnswerChoicesModule } from '../answer-choices/answer-choices.module';



@NgModule({
  declarations: [ProblemSolverComponent],
  imports: [
    CommonModule,
    ProblemDisplayModule,
    EmotionCardModule,
    AnswerChoicesModule
  ],
  exports:[ProblemSolverComponent]
})
export class ProblemSolverModule { }
