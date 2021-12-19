import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'emotion-card',
  templateUrl: './emotion-card.component.html',
  styleUrls: ['./emotion-card.component.scss'],
})
export class EmotionCardComponent implements OnInit {

  @Input() answerIsCorrect: boolean;
  @Input() show: boolean;

  constructor() { }

  ngOnInit() {}

}
