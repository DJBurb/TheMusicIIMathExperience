import { Component, OnInit } from '@angular/core';
import { ProblemType } from 'src/enum/problemTypeEnum';
import { Problem } from 'src/models/problem';
import { ProblemGeneratorService } from '../problem-generator.service';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.page.html',
  styleUrls: ['./subtraction.page.scss'],
})
export class SubtractionPage implements OnInit {

  problemNumbers: Problem[]=[];
  firstNumber: number;
  answerIsCorrect: boolean;
  secondNumber: number;
  currentProblem: Problem;
  showPraiseCard: boolean;
  currentProblemIndex: number;
  problemType: ProblemType;

  constructor(private problemGeneratorService:ProblemGeneratorService) { }

  ngOnInit() {
    this.problemType= ProblemType.Subtraction;
    for(let i=0; i<=this.problemGeneratorService.getNumberOfProblemsToSolve()-1; i++){
      const problemNumber= this.problemGeneratorService.generate(0,10,0,10, this.problemType);
      this.problemNumbers.push(problemNumber);

      if(this.problemNumbers.length >0){
        this.currentProblemIndex= 0;
        this.currentProblem=this.problemNumbers[this.currentProblemIndex];
        this.answerIsCorrect = false;
      }
    }
  }

  checkAnswer(chosenAnswer: number){
    if(chosenAnswer === this.currentProblem.answer){
        this.answerIsCorrect= true;
        this.currentProblemIndex++;
        this.showPraiseCard=true;
        setTimeout(()=>{
          if(this.currentProblemIndex<this.problemNumbers.length){
            this.currentProblem=this.problemNumbers[this.currentProblemIndex];
            this.showPraiseCard=false;
            this.answerIsCorrect=false;
          }
        }, 2000)


    }
    else{
        this.answerIsCorrect= false;
        this.currentProblemIndex++;
        this.showPraiseCard=true;
      setTimeout(()=>{
        if(this.currentProblemIndex<this.problemNumbers.length){
          this.currentProblem=this.problemNumbers[this.currentProblemIndex];
          this.showPraiseCard=false;
        }
      }, 2000);
    }
  }

}
