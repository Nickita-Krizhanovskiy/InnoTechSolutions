import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CalcGroup {
  first: CalcVar
  second: CalcVar
  operations: CalcOperations;
}

interface CalcVar {
  value: number;
  modification: CalcModifiers;

}

enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/'
}

enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square'
}

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.scss']
})
export class MyCalculatorComponent {
  public calcOperations = CalcOperations;
  public calcModifiers = CalcModifiers;
  public calcGroups: CalcGroup[] = [
    {
      first: {
        value: 5,
        modification: CalcModifiers.none
      },
      second: {
        value: 5,
        modification: CalcModifiers.none
      },
      operations: CalcOperations.plus
    }
  ]

  public history: string[] = [];

  public operationsBetweenGroups: CalcOperations[] = [];

  public addGroup(): void {
    this.calcGroups.push({
      first: {
        value: 0,
        modification: CalcModifiers.none
      },
      second: {
        value: 0,
        modification: CalcModifiers.none
      },
      operations: CalcOperations.plus
    })
  }

  public removeGroup(index: number): void {
    this.calcGroups.splice(index, 1);
  }

  public result?: number;

  //   public calc() {
  //     switch (this.operation) {
  //       case '+':
  //         this.result = this.first + this.second;
  //         break;
  //         case 'Возведение в квдарат':
  //           this.result = this.first ** this.second;
  //           break;
  //       case '-':
  //         this.result = this.first - this.second;
  //         break;
  //       case '*':
  //         this.result = this.first * this.second;
  //         break;
  //       case '/':
  //         this.result = this.second !== 0 ? this.first / this.second : undefined;
  //         break;
  //     }
  //   }
}

