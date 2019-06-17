
export class User{
    userName:string;
    name:string;
    email:string;
    contactNumber:number;
    password:string;
    course:Courses[];
}

export class Courses {
    courseName: string;
    courseId: number;
    courseImage: string;
    courseChapter: CourseChapter[];
}

export class CourseChapter {
    chapterName: string;
    chapterId: number;
    chapterModule: ChapterModule[];
    chapterQuiz: ChapterQuiz[];
}

export class ChapterModule {
    moduleName: string;
    moduleId: number;
    moduleDetails: ModuleDetails[];
    complete: boolean;
}

export class ChapterQuiz {
    quizId: number;
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    answer: string;
    isComplete: boolean;
}

export class ModuleDetails {
    title: string;
    description: string;
    subModule: SubModule[];
    codesnippet: string;
    youtubelink: string;
}


export class SubModule {
    subtitle: string;
    subdescription: string;
}


export class Quiz{
    quizId:number;
    question:string;
    option1:string;
    option2:string;
    option3:string;
    option4:string;
    answer:string;
}

export class Authenticate{
    userName:string;
    password:string;
}