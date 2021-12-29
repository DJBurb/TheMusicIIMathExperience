import { Component, Input, OnInit } from '@angular/core';
import { Problem } from 'src/models/problem';
import { ProblemType } from '../../enum/problemTypeEnum';
import { ProblemGeneratorService } from '../../app/problem-generator.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'problem-solver',
  templateUrl: './problem-solver.component.html',
  styleUrls: ['./problem-solver.component.scss'],
})
export class ProblemSolverComponent implements OnInit{
  problemNumbers: Problem[]=[];
  firstNumber: number;
  answerIsCorrect: boolean;
  secondNumber: number;
  currentProblem: Problem;
  numberOfProblems: number;
  showPraiseCard: boolean;
  currentProblemIndex: number;
  openResults: boolean;
  rightAnswerCount: number=0;
  wrongAnswerCount: number=0;
  @Input() problemType: ProblemType;
  @Input() firstNumberMin: number=0;
  @Input() firstNumberMax: number=10;
  @Input() secondNumberMin: number=0;
  @Input() secondNumberMax: number=10;


  constructor(private problemGeneratorService: ProblemGeneratorService, private navCtrl: NavController) { }

  ngOnInit() {
    this.numberOfProblems = this.problemGeneratorService.getNumberOfProblemsToSolve();
    for(let i=0; i<=this.problemGeneratorService.getNumberOfProblemsToSolve()-1; i++){
      const problemNumber= this.problemGeneratorService.generate(
        this.firstNumberMin,
        this.firstNumberMax,
        this.secondNumberMin,
        this.secondNumberMax,
        this.problemType);
      this.problemNumbers.push(problemNumber);

      if(this.problemNumbers.length >0){
        this.currentProblemIndex= 0;
        this.currentProblem=this.problemNumbers[this.currentProblemIndex];
        this.answerIsCorrect = false;
      }
    }
  }

  returnToMainMenu(){
    this.navCtrl.navigateRoot('/home', { animated: true, animationDirection: 'forward' });
  }

  closeModal(){
    this.openResults = false;

  }

  checkAnswer(chosenAnswer: number){
    if(chosenAnswer === this.currentProblem.answer){
        this.answerIsCorrect= true;
        this.currentProblemIndex++;
        this.showPraiseCard=true;
        this.rightAnswerCount++;;
        setTimeout(()=>{
          if(this.currentProblemIndex<this.problemNumbers.length){
            this.currentProblem=this.problemNumbers[this.currentProblemIndex];
            this.showPraiseCard=false;
            this.answerIsCorrect=false;
          }
          else{
            this.openResults=true;
          }
        }, 2000)


    }
    else{
        this.answerIsCorrect= false;
        this.currentProblemIndex++;
        this.showPraiseCard=true;
        this.wrongAnswerCount++;
      setTimeout(()=>{
        if(this.currentProblemIndex<this.problemNumbers.length){
          this.currentProblem=this.problemNumbers[this.currentProblemIndex];
          this.showPraiseCard=false;
        }
        else{
          this.openResults=true;
        }
      }, 2000);
    }
  }
}
