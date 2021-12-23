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

  problemType: ProblemType;

  constructor(private problemGeneratorService:ProblemGeneratorService) { }

  ngOnInit() {
    this.problemType= ProblemType.Subtraction;
  }

}
