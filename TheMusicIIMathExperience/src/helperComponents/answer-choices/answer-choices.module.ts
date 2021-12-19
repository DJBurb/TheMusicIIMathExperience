import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerChoicesComponent } from './answer-choices.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AnswerChoicesComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [AnswerChoicesComponent]
})
export class AnswerChoicesModule { }
