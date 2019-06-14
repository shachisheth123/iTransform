import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User, Authenticate } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    user:User;
    auth:Authenticate;

    constructor(private fb:FormBuilder,private userService:UserService,
        private router:Router){
            this.auth = new Authenticate()
        }
        @Output() loggedIn = new EventEmitter<User>();

        loginForm: FormGroup;
        
        ngOnInit() {
            this.loginForm = this.fb.group({
                email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
                password: ["", [Validators.required, Validators.minLength(10)]]
            })
        }
    
        onSubmit1() {
            console.log(this.loginForm.value);
            if (this.loginForm.valid) {
                this.loggedIn.emit(
                    // new User(this.loginForm.value.email,this.loginForm.value.password)
                );
            }
        }
    onSubmit(){

        this.userService.getUserAuthentication(this.auth.userName,this.auth.password).subscribe((data) => {
            this.user = data;


            if (this.user != null) {
                    //setting session storage
                    sessionStorage.setItem("userName", JSON.stringify(this.user));
                    //console.log(JSON.parse(sessionStorage.getItem("user")));
                    this.router.navigate(['/courses']);
            } else {
                alert("please enter correct userName and password")
                this.router.navigate(['/login']);
            }

        });

    }

}
