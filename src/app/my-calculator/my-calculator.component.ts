import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.scss']
})
export class MyCalculatorComponent {

  public first: number = 1;
  public second: number = 1;
  public operation: string = '+';
  public operations: string[] = ['+', '-', '*', '/'];
  public result?: number;


  public calc() {
    switch (this.operation) {
      case '+':
        this.result = this.first + this.second;
        break;
      case '-':
        this.result = this.first - this.second;
        break;
      case '*':
        this.result = this.first * this.second;
        break;
      case '/':
        this.result = this.second !== 0 ? this.first / this.second : undefined;
        break;
    }
  }
}

