import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmotionCardComponent } from './emotion-card.component';



@NgModule({
  declarations: [EmotionCardComponent],
  imports: [
    CommonModule
  ],
  exports: [EmotionCardComponent]
})
export class EmotionCardModule { }
