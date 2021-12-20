import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditionPageRoutingModule } from './addition-routing.module';

import { AdditionPage } from './addition.page';
import { EmotionCardModule } from '../../helperComponents/emotion-card/emotion-card.module';
import { AnswerChoicesModule } from '../../helperComponents/answer-choices/answer-choices.module';
import { ProblemDisplayModule } from '../../helperComponents/problem-display/problem-display.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditionPageRoutingModule,
    EmotionCardModule,
    AnswerChoicesModule,
    ProblemDisplayModule
  ],
  declarations: [AdditionPage]
})
export class AdditionPageModule {}
