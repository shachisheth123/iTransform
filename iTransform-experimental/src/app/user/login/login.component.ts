import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User, Authenticate } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: User;
    auth: Authenticate;

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router
    ) {
        
    }

    public loginForm: FormGroup;

    ngOnInit() {
        this.loginForm = this.fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    // onSubmit1() {
    //     console.log(this.loginForm.value);
    //     if (this.loginForm.valid) {
    //         this.loggedIn.emit(
    //             // new User(this.loginForm.value.email,this.loginForm.value.password)
    //         );
    //     }
    // }
    onSubmit() {
        this.userService.getUserAuthentication(this.auth.userName, this.auth.password).subscribe((data) => {
            this.user = data;
            console.log(data);
            if (this.user != null) {
<<<<<<< HEAD
                // setting session storage
                sessionStorage.setItem("user", JSON.stringify(this.user));
                // console.log(JSON.parse(sessionStorage.getItem("user")));
                this.router.navigate(['/courses']);
=======
                    // setting session storage
                    sessionStorage.setItem("user", JSON.stringify(this.user));
                    // console.log(JSON.parse(sessionStorage.getItem("user")));
                    // document.getElementById('loginbtn').style.display = 'none';
                    // document.getElementById('signupbtn').style.display = 'none';
                    this.router.navigate(['/courses']);
                    window.location.href = '/courses';
>>>>>>> 238af308eebadd81d9c3b94f1f7e241cd45ea638
            } else {
                alert('please enter correct userName and password');
                this.router.navigate(['/login']);
            }

        }, (error) => {
            console.log(error);
        });


    }

}
