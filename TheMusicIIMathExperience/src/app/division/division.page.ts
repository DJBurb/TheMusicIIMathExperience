import { Component, OnInit } from '@angular/core';
import { ProblemType } from 'src/enum/problemTypeEnum';
import { Problem } from 'src/models/problem';
import { ProblemGeneratorService } from '../problem-generator.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.page.html',
  styleUrls: ['./division.page.scss'],
})
export class DivisionPage implements OnInit {

  problemType: ProblemType;

  constructor() { }

  ngOnInit() {
    this.problemType= ProblemType.Division;
  }

}
