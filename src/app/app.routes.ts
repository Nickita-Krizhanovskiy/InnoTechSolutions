import { MyCalculatorComponent } from './my-calculator/my-calculator.component';

import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'login', component: LoginPageComponent }
];
