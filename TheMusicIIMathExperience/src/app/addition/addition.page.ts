import { Component, OnInit } from '@angular/core';
import { ProblemType } from 'src/enum/problemTypeEnum';
import { Problem } from 'src/models/problem';
import { ProblemGeneratorService } from '../problem-generator.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.page.html',
  styleUrls: ['./addition.page.scss'],
})
export class AdditionPage implements OnInit {

  problemNumbers: Problem[]=[];
  firstNumber: number;
  answerIsCorrect: boolean;
  secondNumber: number;
  currentProblem: Problem;
  showPraiseCard: boolean;
  currentProblemIndex: number;

  constructor(private problemGeneratorService:ProblemGeneratorService) { }

  ngOnInit() {
    for(let i=0; i<=9; i++){
      const problemNumber= this.problemGeneratorService.generate(0,10,0,10, ProblemType.Addition);
      this.problemNumbers.push(problemNumber);

      if(this.problemNumbers.length >0){
        this.currentProblemIndex= 0;
        this.currentProblem=this.problemNumbers[this.currentProblemIndex];
        this.answerIsCorrect = false;
      }
    }
     console.log(this.problemNumbers);
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
      }, 2000)
    }
  }

}
