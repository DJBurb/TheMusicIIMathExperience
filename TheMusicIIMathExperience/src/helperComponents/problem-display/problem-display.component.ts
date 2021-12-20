import { Component, Input, OnInit } from '@angular/core';
import { ProblemType } from '../../enum/problemTypeEnum';

@Component({
  selector: 'problem-display',
  templateUrl: './problem-display.component.html',
  styleUrls: ['./problem-display.component.scss'],
})
export class ProblemDisplayComponent implements OnInit {

  @Input() showAnswer:boolean;
  @Input() firstNumber: number;
  @Input() secondNumber: number;
  @Input() problemType: ProblemType;
  @Input() answer: number;

  mathSymbol: string;
  constructor() { }

  ngOnInit() {
    if(this.problemType === ProblemType.Addition){
      this.mathSymbol="+";
    }
    if(this.problemType === ProblemType.Subtraction){
      this.mathSymbol="-";
    }
  }

}
