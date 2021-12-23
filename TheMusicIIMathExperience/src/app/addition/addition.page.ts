import { Component, OnInit } from '@angular/core';
import { ProblemType } from 'src/enum/problemTypeEnum';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.page.html',
  styleUrls: ['./addition.page.scss'],
})
export class AdditionPage implements OnInit {

  problemType: ProblemType;

  constructor() { }

  ngOnInit() {
    this.problemType= ProblemType.Addition;
  }

}
