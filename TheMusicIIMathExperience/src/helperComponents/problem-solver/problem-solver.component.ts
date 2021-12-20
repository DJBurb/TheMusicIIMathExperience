import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProblemType } from '../../enum/problemTypeEnum';

@Component({
  selector: 'problem-solver',
  templateUrl: './problem-solver.component.html',
  styleUrls: ['./problem-solver.component.scss'],
})
export class ProblemSolverComponent implements OnInit {

  @Input() firstNumber: number;
  @Input() secondNumber: number;
  @Input() answer: number;
  @Input() possibleAnswer1: number;
  @Input() possibleAnswer2: number;
  @Input() possibleAnswer3: number;
  @Input() possibleAnswer4: number;

  @Input() showAnswer: boolean;
  @Input() showPraiseCard: boolean;
  @Input() answerIsCorrect: boolean;
  @Input() problemType: ProblemType;
  @Output() emitChoiceEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  checkAnswer(selectedChoice:number){
    this.emitChoiceEvent.emit(selectedChoice);
  }
}
