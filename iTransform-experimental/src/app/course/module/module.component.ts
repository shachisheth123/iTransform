import { Component, OnInit, ViewChild, ElementRef, PipeTransform, Pipe } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses, CourseChapter, ChapterModule } from '../course';
import { User } from 'src/app/user/user';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Component({
    templateUrl: './module.component.html',
    styleUrls : ['./module.component.css']
})
export class ModuleComponent implements OnInit {

    progress = 0;
    count=0;

    user: User;
    courses: Courses[];

    constructor(private courseService: CourseService,
                private route: ActivatedRoute,
                private router: Router) { }

    actualCourse: Courses;
    course: Courses;
    chapters: CourseChapter[]
    modules: ChapterModule[];
    module: ChapterModule;
    courseId: number;
    chapterId: number;
    moduleId: number;
        video: string;
    array: Array<String> = [];
    value: string;
    length = 0;
    courseForSessionStorage: Courses;

    moduleCount = 0;

    ngOnInit(): void {

        this.user = JSON.parse(sessionStorage.getItem("user"));
        this.courses = this.user.course;


        this.route.paramMap.subscribe((map) => {
            this.courseId = Number(map.get("courseId"));
            this.chapterId = Number(map.get("chapterId"));
            this.moduleId = Number(map.get("moduleId"));

            console.log(this.chapterId + "" + this.moduleId)
            this.course = this.courses[this.courseId];
            this.chapters = this.course.courseChapter;

            for (let i = 0; i < this.chapters.length; i++) {
                this.modules = this.chapters[i].chapterModule;
                for (let j = 0; j < this.modules.length; j++) {
                    this.value = i + "" + j;

                    if (this.length == 0) {
                        this.array.push(i + "" + j);
                    }
                }
            }
            this.length = this.array.length;
            console.log(this.array);
            console.log(this.course);
            this.module = this.chapters[this.chapterId].chapterModule[this.moduleId];
            console.log(this.module);
            console.log(this.module.moduleDetails[0].youtubelink);
            this.video = this.module.moduleDetails[0].youtubelink;
        });


        for (let i = 0; i < this.chapters.length; i++) {
            for (let j = 0; j < this.chapters[i].chapterModule.length; j++) {
                console.log(this.chapters[i].chapterModule[j])
                console.log(this.chapters[i].chapterModule[j].complete)
                this.moduleCount++
                if (this.chapters[i].chapterModule[j].complete) {
                    this.count++
                    console.log(this.count);
                }
            }
        }

       
        console.log(this.moduleCount);
        this.progress = Number((this.count / this.moduleCount) * 100);
        console.log(this.count);


    }

    

    next() {
        this.user.course[this.courseId].courseChapter[this.chapterId].chapterModule[this.moduleId].complete = true;
       this.courseService.updateUserCourse(this.user).subscribe((data)=>{
            this.user = data;
            sessionStorage.setItem("user",JSON.stringify(this.user));
        })


        //for progress bar
        this.count = 0;
        for (let i = 0; i < this.user.course[this.courseId].courseChapter.length; i++) {
            for (let j = 0; j < this.user.course[this.courseId].courseChapter[i].chapterModule.length; j++) {
                console.log(this.chapters[i].chapterModule[j].complete)
                if (this.user.course[this.courseId].courseChapter[i].chapterModule[j].complete) {
                    this.count++
                    console.log(this.count)
                }
            }
        }
        console.log(this.moduleCount)
        console.log(this.count)
        this.progress = Number((this.count / this.moduleCount) * 100);



        let value = this.chapterId + "" + this.moduleId;
        for (let i = 0; i < this.array.length; i++) {
            if (value == this.array[i] && i != this.array.length - 1) {
                let got = this.array[i + 1];
                console.log(got)
                this.router.navigate(["chapters/" + this.courseId + "/modules/" + this.courseId + "/"+ Number(got.charAt(0)) + "/" + Number(got.charAt(1))]);
            }
        }
    }

    previous() {

        let value = this.chapterId + "" + this.moduleId;
        for (let i = this.array.length - 1; i >= 0; i--) {
            if (value == this.array[i] && i != 0) {
                let got = this.array[i - 1];
                console.log(got);
                this.router.navigate(["chapters/" + this.courseId + "/modules/" + this.courseId + "/" + Number(got.charAt(0)) + "/" + Number(got.charAt(1))]);
            }
        }
    }


}
