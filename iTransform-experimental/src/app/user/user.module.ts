import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { userRoute } from './user.route';
import { UserService } from './user.service';
<<<<<<< HEAD
import { HttpClientModule  } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


=======
import { LogoutComponent } from './logout.component';
>>>>>>> 238af308eebadd81d9c3b94f1f7e241cd45ea638

@NgModule({
    declarations: [
        RegistrationComponent,
        LoginComponent,
        LogoutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        HttpClientTestingModule,
        RouterModule.forChild(userRoute),
    
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
