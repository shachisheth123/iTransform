import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { userRoute } from './user.route';
import { UserService } from './user.service';

@NgModule({
    declarations: [
        RegistrationComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(userRoute)
    ],
    exports: [
        RegistrationComponent,
        LoginComponent,
    ],
    providers:[
        UserService
    ]
})
export class UserModule {
}
