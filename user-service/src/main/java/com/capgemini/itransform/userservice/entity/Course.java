package com.capgemini.itransform.userservice.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Course {
	@Id
	private int courseId;
	private String courseName;
	private String courseImage;
	private CourseChapter courseChapter[];
	
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Course(int courseId, String courseName, String courseImage, CourseChapter[] courseChapter) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseImage = courseImage;
		this.courseChapter = courseChapter;
	}



	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public CourseChapter[] getCourseChapter() {
		return courseChapter;
	}

	public void setCourseChapter(CourseChapter[] courseChapter) {
		this.courseChapter = courseChapter;
	}



	public String getCourseImage() {
		return courseImage;
	}



	public void setCourseImage(String courseImage) {
		this.courseImage = courseImage;
	}
	
	
	
}