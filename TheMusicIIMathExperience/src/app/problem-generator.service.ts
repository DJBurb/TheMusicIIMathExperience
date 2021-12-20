import { Injectable } from '@angular/core';
import { Problem } from 'src/models/problem';
import { ProblemType } from '../enum/problemTypeEnum';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class ProblemGeneratorService {

  constructor(private utilitiesService:UtilitiesService) { }

  generate(firstNumberMin: number, firstNumberMax: number,
    secondNumberMin: number, secondNumberMax: number, problemType:ProblemType):Problem{
      let possibleAnswers = [];
      let firstNumber = Math.floor(Math.random() * (firstNumberMax - firstNumberMin + 1)) + firstNumberMin;
      let secondNumber = Math.floor(Math.random() * (secondNumberMax - secondNumberMin + 1)) + secondNumberMin;

      let answer =0;
      if(problemType === ProblemType.Addition){
        answer = firstNumber+secondNumber;
        possibleAnswers.push(answer);
      }
      else if(problemType === ProblemType.Subtraction){
        if(secondNumber>firstNumber){
          const temp= firstNumber;
          firstNumber = secondNumber;
          secondNumber=temp;
        }
        answer = firstNumber-secondNumber;
        possibleAnswers.push(answer);
      }
      else if(problemType === ProblemType.Multiplication){
        answer = firstNumber*secondNumber;
        possibleAnswers.push(answer);
      }

      for(let i=0; i<3; i++){
        let randomPossibleAnswer=0
        do{
          randomPossibleAnswer= Math.floor(Math.random() *
          ((firstNumberMax + secondNumberMax) - firstNumberMin + 1))
        }while(possibleAnswers.includes(randomPossibleAnswer));
        possibleAnswers.push(randomPossibleAnswer);
      }
      possibleAnswers = this.utilitiesService.shuffleArray(possibleAnswers);
      return  {firstNumber: firstNumber,
        secondNumber: secondNumber,
        answer: answer,
        possibleAnswers:possibleAnswers
      }
    }

  getNumberOfProblemsToSolve():number{
    return 10;
  }
}
