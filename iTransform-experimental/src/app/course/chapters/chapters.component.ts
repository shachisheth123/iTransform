import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Courses, CourseChapter, ChapterModule } from '../course';
import { User } from 'src/app/user/user';



@Component({
    templateUrl: './chapters.component.html',
    styleUrls : ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

    courseForSessionStorage : Courses;    

    constructor(private courseService: CourseService,
        private route: ActivatedRoute) { }
    
    user:User;
    courses:Courses[];
    course: Courses;
    chapters: CourseChapter[]
    modules: ChapterModule[];

    courseId:number;
    ngOnInit(): void {

        this.user = JSON.parse(sessionStorage.getItem("user"));
        this.courses = this.user.course;
        
        this.route.paramMap.subscribe((map) => {
           this.courseId = Number(map.get("courseId"));
        
           this.course = this.courses[this.courseId]; 
           this.chapters = this.course.courseChapter;

          for (let i = 0; i < this.chapters.length; i++) {
                this.modules = this.chapters[i].chapterModule;
            }
       })

    }
}