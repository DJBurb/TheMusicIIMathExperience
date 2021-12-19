import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'answer-choices',
  templateUrl: './answer-choices.component.html',
  styleUrls: ['./answer-choices.component.scss'],
})
export class AnswerChoicesComponent implements OnInit {

  @Input() answerChoice1: number;
  @Input() answerChoice2: number;
  @Input() answerChoice3: number;
  @Input() answerChoice4: number;
  @Output() emitChoiceEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  emitChoice(selectedChoice:number){
    this.emitChoiceEvent.emit(selectedChoice);
  }
}
