import { Component, OnInit } from '@angular/core';
import { ProblemType } from 'src/enum/problemTypeEnum';
import { Problem } from 'src/models/problem';
import { ProblemGeneratorService } from '../problem-generator.service';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.page.html',
  styleUrls: ['./multiplication.page.scss'],
})
export class MultiplicationPage implements OnInit {

  problemType: ProblemType;

  constructor() { }

  ngOnInit() {
    this.problemType= ProblemType.Multiplication;

  }
}
