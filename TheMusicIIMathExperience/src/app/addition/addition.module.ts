import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdditionPageRoutingModule } from './addition-routing.module';

import { AdditionPage } from './addition.page';
import { EmotionCardModule } from '../../helperComponents/emotion-card/emotion-card.module';
import { EmotionCardComponent } from '../../helperComponents/emotion-card/emotion-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdditionPageRoutingModule,
    EmotionCardModule
  ],
  declarations: [AdditionPage]
})
export class AdditionPageModule {}
