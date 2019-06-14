import { Component, OnInit } from '@angular/core';
import { User, Authenticate } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    user:User;
    auth:Authenticate;

    constructor(private userService:UserService,
        private router:Router){
            this.auth = new Authenticate()
        }
    ngOnInit(){
    }

    onSubmit(){

        this.userService.getUserAuthentication(this.auth.userName,this.auth.password).subscribe((data) => {
            this.user = data;


            if (this.user != null) {
                    //setting session storage
                    sessionStorage.setItem("user", JSON.stringify(this.user));
                    //console.log(JSON.parse(sessionStorage.getItem("user")));
                    this.router.navigate(['/courses']);
            } else {
                alert("please enter correct userName and password")
                this.router.navigate(['/login']);
            }

        });

    }

}
