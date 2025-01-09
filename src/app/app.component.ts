import { LoginPageComponent } from './pages/login-page/login-page.component';

import { LowerCasePipe, UpperCasePipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pipe } from 'rxjs';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyCalculatorComponent, RouterOutlet, LowerCasePipe, UpperCasePipe, DatePipe, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = Date();
  backgroundImage = 'assets/back.png'
}
