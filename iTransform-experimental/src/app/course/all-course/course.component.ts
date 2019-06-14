import { Component, OnInit } from '@angular/core';
import { Courses } from '../course';
import { CourseService } from '../course.service';
import { User } from 'src/app/user/user';

@Component({
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
    courses: Courses[];
    user: User;
    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        this.courses = this.user.course;
        console.log(this.courses);
    }
}
