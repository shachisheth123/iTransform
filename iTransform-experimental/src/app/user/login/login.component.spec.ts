import { LoginComponent } from "./login.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { User } from './User';

describe("LoginComponent", () => {

    let loginComponent: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [ReactiveFormsModule, FormsModule]
        })
        fixture = TestBed.createComponent(LoginComponent);

        loginComponent = fixture.componentInstance;
        loginComponent.ngOnInit;
        
    })
    it("form invalid when empty", () => {
        expect(loginComponent.loginForm).toBeFalsy();
    })

    // it("password field validity", () => {
    //     let errors = {};
    //     let password = loginComponent.loginForm.pssword;

    //     errors = password.errors || {};
    //     expect(errors["required"]).toBeTruthy();
    //     expect(errors["required"]).toBeFalsy();
    //     expect(errors["minlength"]).toBeTruthy();
    //     expect(errors["required"]).toBeFalsy();
    //     expect(errors["minlength"]).toBeFalsy();

    // })
 
})

