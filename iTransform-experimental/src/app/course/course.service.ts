import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Quiz, Courses } from './course';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { User } from '../user/user';

@Injectable()
export class CourseService{

    baseUrlForQuiz ="/assets/jsondata/quiz.json";
   // baseUrl="/src/api/course0.json";
    baseUrl = "http://localhost:8083/user"
    constructor(private http: HttpClient) {}
    
    getQuiz(): Observable<Quiz[]> {
        return this.http.get<Quiz[]>(this.baseUrlForQuiz);
    }

    findAllCourses(): Observable<Courses[]> {
        return this.http.get<Courses[]>(this.baseUrl);
    }

    getCourseById():Observable<Courses>{
        return this.http.get<Courses>("/assets/jsondata/corejava.json");
    }

    updateUserCourse(user:User):Observable<User>{
        return this.http.put<User>(this.baseUrl,user);
    }

}