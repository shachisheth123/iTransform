import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './user/login/login.component';

export const appRoute: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'login', component: LoginComponent}
];
