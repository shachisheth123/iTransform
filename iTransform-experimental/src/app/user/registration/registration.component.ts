import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Courses } from 'src/app/course/course';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/course/course.service';


@Component({
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    constructor(private fb :FormBuilder,
        private userService:UserService,private router:Router,
        private courseService:CourseService){}
    user:User;
    course :Courses[];
    registrationForm : FormGroup;
    submitted = false;
    ngOnInit(){

        this.user = new User();
        this.userService.getAllCourses().subscribe((data) =>{
            this.course = data;
        console.log(this.course);
        });

        this.registrationForm=this.fb.group({

            userName: ['', Validators.required],
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            contactNumber : ['', [Validators.required, Validators.pattern('^\d{10}$')]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }


    registerNewUser() {
        console.log(this.registrationForm.value);
        console.log(this.course);
        this.user.course = this.course;
        console.log(this.user.course);
        Object.assign(this.user, this.registrationForm.value);
        this.userService.addNewUser(this.registrationForm.value).subscribe((data) => {
            this.user = data;
            this.user.course = this.course;
            this.courseService.updateUserCourse(this.user).subscribe((data) => {
                // tslint:disable-next-line:max-line-length
                if(this.user.contactNumber == 0 && this.user.name == '' && this.user.email=='' && this.user.password=="" && this.user.userName==""){
                    alert("Registration is unsuccessful");
                }
                else 
                {
                    this.submitted = true;
                    alert("Registration is successful");
                    this.router.navigate(["/login"]);
                }
            })

            
        })

    }

    get userName() { return this.registrationForm.get("userName"); }
    get name() { return this.registrationForm.get("name"); }
    get email() { return this.registrationForm.get("email"); }
    get password() { return this.registrationForm.get("password"); }
    get contactNumber() { return this.registrationForm.get("contactNumber"); }
    
    
    // get name() { return this.registrationForm.controls.name; }
    // get email() { return this.registrationForm.controls.email; }
    // get password() { return this.registrationForm.controls.password; }
    // get contactNumber() { return this.registrationForm.controls.contactNumber; }

}
