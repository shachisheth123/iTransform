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
    ngOnInit(){

        this.user = new User();
        this.userService.getAllCourses().subscribe((data) =>{
            this.course = data;
        console.log(this.course)
            
        })
        

        this.registrationForm=this.fb.group({

            userName: ["",[Validators.required]],
            name:["",[Validators.required]],
            email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
            contactNumber : ["",Validators.required, Validators.pattern("^\d{10}$")],
            password: ["", [Validators.required, Validators.minLength(10)]]
        });
    }

    registerNewUser(){
        console.log(this.registrationForm.value);
        console.log(this.course)
        this.user.course = this.course;
        console.log(this.user.course);
        
        this.userService.addNewUser(this.registrationForm.value).subscribe((data)=>{
            this.user = data;
            this.user.course = this.course;
            this.courseService.updateUserCourse(this.user).subscribe((data) =>{
                if(data!=null){
                    alert("Registration is successfull")
                    this.router.navigate(["/login"]);
                }
            })

            
        })

    }

}
