import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CourseService } from 'src/app/course/course.service';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe("LoginComponent", () => {


    let loginComponent: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let mockRouter: any;


    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientTestingModule],
            providers: [UserService,
                HttpClient,
                HttpHandler,
                CourseService,
                { provide: Router, useValue: mockRouter },
                {
                    provide: RouterStateSerializer,
                    useClass: fromStoreUtils.CustomRouterStateSerializer,
                  },]
        })


        fixture = TestBed.createComponent(LoginComponent);

        loginComponent = fixture.componentInstance;
        loginComponent.ngOnInit();

    })

    it("form invalid when empty", () => {
        expect(loginComponent.loginForm.valid).toBeFalsy();

    })

    it("email field validity", () => {
        let email = loginComponent.loginForm.controls.email;
        let errors = {};
        expect(email.valid).toBeFalsy();
        errors = email.errors || {};
        expect(errors["required"]).toBeTruthy();

        email.setValue("shachi");
        errors = email.errors || {};
        expect(errors["pattern"]).toBeTruthy();
        expect(errors["required"]).toBeFalsy();

        email.setValue("shachi@gmail.com");
        errors = email.errors || {};
        expect(email.valid).toBeTruthy();
        expect(errors["required"]).toBeFalsy();
        expect(errors["pattern"]).toBeFalsy();
    })


    it("password field validity", () => {
        let errors = {};
        let password = loginComponent.loginForm.controls.password;

        errors = password.errors || {};
        expect(errors["required"]).toBeTruthy();

        password.setValue("456");
        errors = password.errors || {};
        expect(errors["required"]).toBeFalsy();
        expect(errors["minlength"]).toBeTruthy();

        password.setValue("1236547890");
        errors = password.errors || {};
        expect(errors["required"]).toBeFalsy();
        expect(errors["minlength"]).toBeFalsy();

    })

    afterEach(() => {
        TestBed.resetTestingModule();
    });

})