import { RegistrationComponent } from "./registration.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/course/course.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe("RegistrationComponent", () => {

    let registrationComponent: RegistrationComponent;
    let fixture: ComponentFixture<RegistrationComponent>;
    let mockRouter: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RegistrationComponent],
            imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule, HttpClientModule],
            providers: [UserService,
                HttpClient, HttpHandler,
                { provide: Router, useValue: mockRouter },
                CourseService]
        })

        fixture = TestBed.createComponent(RegistrationComponent);

        registrationComponent = fixture.componentInstance;
        registrationComponent.ngOnInit();
    })

    it("form invalid when empty", () => {

        expect(registrationComponent.registrationForm.valid).toBeFalsy();


    })

    it("email field validity", () => {
        let email = registrationComponent.registrationForm.controls.email;
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
        let password = registrationComponent.registrationForm.controls.password;

        errors = password.errors || {};
        expect(errors["required"]).toBeTruthy();

        password.setValue("456");
        errors = password.errors || {};
        expect(errors["required"]).toBeFalsy();
        expect(errors["minlength"]).toBeTruthy();

        password.setValue("1230654789");
        errors = password.errors || {};
        expect(errors["required"]).toBeFalsy();
        expect(errors["minlength"]).toBeFalsy();

    })

    it("Contact field validity", () => {

        let errors = {};
        let contact = registrationComponent.registrationForm.controls.contact;

        // errors = contact.errors || {};
        // expect(errors["required"]).toBeTruthy();

        contact.setValue("1230456789");
        errors = contact.errors || {};
        expect(errors["pattern"]).toBeTruthy();
        expect(errors["required"]).toBeFalsy();
        


    })

    it("username should not be empty" , () => {

        let errors={};
        let username=registrationComponent.registrationForm.controls.username;

        errors = username.errors || {};
        expect(errors["required"]).toBeTruthy();


    })

    afterEach(() => {
        TestBed.resetTestingModule();
    });

    
})