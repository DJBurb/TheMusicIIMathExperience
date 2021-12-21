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
      switch (problemType) {
        case ProblemType.Addition:
          {
            answer = firstNumber+secondNumber;
            possibleAnswers.push(answer);
          }
          break;
        case ProblemType.Subtraction:
          {
            if(secondNumber>firstNumber){
              const temp= firstNumber;
              firstNumber = secondNumber;
              secondNumber=temp;
            }
            answer = firstNumber-secondNumber;
            possibleAnswers.push(answer);
          }
          break;
        case ProblemType.Multiplication:
          {
            answer = firstNumber*secondNumber;
            possibleAnswers.push(answer);
          }
          break;
        case ProblemType.Division:
          {
            const quotient = firstNumber * secondNumber;
            const tempFirstNumber = firstNumber;
            const tempSecondNumber = secondNumber;
            firstNumber= quotient;
            answer= tempSecondNumber;
            secondNumber= tempFirstNumber;
            possibleAnswers.push(answer);
          }
          break;
        default:
          break;
      }

      generateRandomPossibleAnswers(firstNumberMax, secondNumberMax, firstNumberMin, possibleAnswers);
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
function generateRandomPossibleAnswers(firstNumberMax: number,
  secondNumberMax: number, firstNumberMin: number, possibleAnswers: number[]) {
  for (let i = 0; i < 3; i++) {
    let randomPossibleAnswer = 0;
    do {
      randomPossibleAnswer = Math.floor(Math.random() *
        ((firstNumberMax + secondNumberMax) - firstNumberMin + 1));
    } while (possibleAnswers.includes(randomPossibleAnswer));
    possibleAnswers.push(randomPossibleAnswer);
  }
}

